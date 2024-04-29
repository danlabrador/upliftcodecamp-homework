import { addEmployee, editEmployee } from '../services/state/employees/employeesSlice';
import { KeyboardEvent, useEffect } from 'react';
import { RootState } from '../services/state/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { User } from '../interfaces/User';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Set up a schema and type for the form fields
const schema = z.object({
  name: z.string().refine(value => value.trim().split(/\s+/).length >= 2, {
    message: 'Please enter your full name.',
  }),
  email: z.string().email('Please enter a valid email address.'),
  role: z.string().min(3, {
    message: 'Role must be at least 3 characters long.',
  }),
  emergencyContactName: z.string().refine(value => value.trim().split(/\s+/).length >= 2, {
    message: 'Please enter their full name.',
  }),
  emergencyContactNumber: z.string().refine(value => /^(\+)?[0-9]{7,}$/.test(value), {
    message: 'Contact number must contain at least 7 numbers and may include a plus symbol',
  }),
});

type FormFields = z.infer<typeof schema>;

export function useEmployeeForm(user?: User) {
  // MARK: Form
  // Set up local storage for form values
  const {
    setItem: setLSName,
    getItem: getLSName,
    removeItem: removeLSName,
  } = useLocalStorage('name');

  const {
    setItem: setLSEmail,
    getItem: getLSEmail,
    removeItem: removeLSEmail,
  } = useLocalStorage('email');

  const {
    setItem: setLSRole,
    getItem: getLSRole,
    removeItem: removeLSRole,
  } = useLocalStorage('role');

  const {
    setItem: setLSEmergencyContactName,
    getItem: getLSEmergencyContactName,
    removeItem: removeLSEmergencyContactName,
  } = useLocalStorage('emergencyContactName');

  const {
    setItem: setLSEmergencyContactNumber,
    getItem: getLSEmergencyContactNumber,
    removeItem: removeLSEmergencyContactNumber,
  } = useLocalStorage('emergencyContactNumber');

  // Set up the form
  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: user
      ? {
          name: user.name || getLSName() || '',
          email: user.email || getLSEmail() || '',
          role: user.role || getLSRole() || '',
          emergencyContactName: user.emergencyContactName || getLSEmergencyContactName() || '',
          emergencyContactNumber:
            user.emergencyContactNumber || getLSEmergencyContactNumber() || '',
        }
      : {
          name: getLSName() || '',
          email: getLSEmail() || '',
          role: getLSRole() || '',
          emergencyContactName: getLSEmergencyContactName() || '',
          emergencyContactNumber: getLSEmergencyContactNumber() || '',
        },
    resolver: zodResolver(schema),
  });

  const clearLocalStorage = () => {
    removeLSName();
    removeLSEmail();
    removeLSRole();
    removeLSEmergencyContactName();
    removeLSEmergencyContactNumber();
  };

  // Update local storage when form values change
  const formValues = watch();
  useEffect(() => {
    if (isSubmitting) return;
    if (formValues.name) setLSName(formValues.name);
    if (formValues.email) setLSEmail(formValues.email);
    if (formValues.role) setLSRole(formValues.role);
    if (formValues.emergencyContactName) setLSEmergencyContactName(formValues.emergencyContactName);
    if (formValues.emergencyContactNumber)
      setLSEmergencyContactNumber(formValues.emergencyContactNumber);
  }, [
    formValues.name,
    formValues.email,
    formValues.role,
    formValues.emergencyContactName,
    formValues.emergencyContactNumber,
    setLSName,
    setLSEmail,
    setLSRole,
    setLSEmergencyContactName,
    setLSEmergencyContactNumber,
    isSubmitting,
  ]);

  const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' ||
      (event.key !== 'Backspace' &&
        !(event.key === 'a' && (event.ctrlKey || event.metaKey)) &&
        !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key) &&
        !/^(\+)?[0-9]*$/.test(event.currentTarget.value + event.key))
    ) {
      event.preventDefault();
    }
  };

  // MARK: Submit
  const employees = useSelector((state: RootState) => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = async (data: User) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Remove local storage values
      reset();
      removeLSName();
      removeLSEmail();
      removeLSRole();
      removeLSEmergencyContactName();
      removeLSEmergencyContactNumber();
      reset();

      // Handle form submission
      if (user) {
        dispatch(editEmployee({ id: user.id as number, ...data }));
      } else {
        const id =
          employees.reduce((acc, curr) => (curr.id && curr.id > acc ? curr.id : acc), 0) + 1;
        dispatch(addEmployee({ id, ...data }));
      }
      navigate('/employees');
    } catch (error) {
      setError('root', {
        message: 'This email is already taken',
      });
    }
  };

  return {
    errors,
    handlePhoneKeyDown,
    handleSubmit,
    isSubmitting,
    onSubmit,
    register,
    clearLocalStorage,
  };
}
