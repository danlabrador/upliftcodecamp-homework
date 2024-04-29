import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../services/state/store';
import { useEmployeeForm } from '../../hooks/useEmployeeForm';
import { useSelector } from 'react-redux';
import Button from '../../components/ui/Button';
import H2 from '../../components/ui/H2';
import H3 from '../../components/ui/H3';
import Input from '../../components/ui/Input';
import InputError from '../../components/ui/InputError';

interface FormError {
  message: string;
}

export const EmployeeForm = () => {
  const { id } = useParams();
  const employees = useSelector((state: RootState) => state.employees);
  const user = employees.find(employee => employee.id === Number(id));

  const { register, handleSubmit, handlePhoneKeyDown, errors, isSubmitting, onSubmit } =
    useEmployeeForm(user);

  const navigate = useNavigate();
  const { clearLocalStorage } = useEmployeeForm();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Link className="text-indigo-600 hover:underline" to="/employees">
        &lt; Back to Employees page
      </Link>
      <H2 value={id ? 'Edit Employee' : 'Add Employee'} />

      <H3 value="Employee Details" />
      <fieldset className="space-y-1">
        <label className="ml-1 text-sm" htmlFor="name">
          Name
        </label>
        <Input {...register('name')} type="text" placeholder="John Doe" />
        <InputError error={errors.name as FormError} />
      </fieldset>

      <fieldset className="space-y-1">
        <label className="ml-1 text-sm" htmlFor="email">
          Email
        </label>
        <Input {...register('email')} type="email" placeholder="johndoe@upliftcodecamp.com" />
        <InputError error={errors.email as FormError} />
      </fieldset>

      <fieldset className="space-y-1">
        <label className="ml-1 text-sm" htmlFor="role">
          Role
        </label>
        <Input {...register('role')} type="text" placeholder="Student" />
        <InputError error={errors.role as FormError} />
      </fieldset>

      <H3 value="Emergency Contact Details" />
      <fieldset className="space-y-1">
        <label className="ml-1 text-sm" htmlFor="emergencyContactName">
          Name
        </label>
        <Input {...register('emergencyContactName')} type="text" placeholder="Jerry Doe" />
        <InputError error={errors.emergencyContactName as FormError} />
      </fieldset>

      <fieldset className="space-y-1">
        <label className="ml-1 text-sm" htmlFor="emergencyContactNumber">
          Phone
        </label>
        <Input
          onKeyDown={handlePhoneKeyDown}
          {...register('emergencyContactNumber')}
          type="text"
          placeholder="+639123456789"
        />
        <InputError error={errors.emergencyContactNumber as FormError} />
      </fieldset>

      <div className="flex gap-4">
        <Button className="w-1/4 min-w-32" type="submit" disabled={isSubmitting}>
          {id ? 'Save' : 'Add'}
        </Button>

        <Button
          variant="secondary"
          className="w-1/4 min-w-32"
          onClick={() => {
            navigate('/employees');
            clearLocalStorage();
          }}
        >
          Cancel
        </Button>
      </div>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  );
};
