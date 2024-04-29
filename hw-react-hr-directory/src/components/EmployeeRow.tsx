import { AppDispatch } from '../services/state/store';
import { removeEmployee } from '../services/state/employees/employeesSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User } from '../interfaces/User';
import Button from './ui/Button';

interface EmployeeRowProps {
  employee: User;
  isOdd: boolean;
}

export function EmployeeRow({ employee, isOdd }: EmployeeRowProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const accentClasses = isOdd ? 'bg-white' : 'bg-gray-100';
  return (
    <tr className={`${accentClasses}`}>
      <td className="px-4 py-2">{employee.name}</td>
      <td className="px-4 py-2">{employee.email}</td>
      <td className="px-4 py-2">{employee.role}</td>
      <td className="px-4 py-2">{employee.emergencyContactName}</td>
      <td className="px-4 py-2 text-center space-x-2 space-y-2">
        <Button
          variant="default"
          onClick={() => {
            navigate(`/employees/edit/${employee.id}`);
          }}
        >
          View / Edit
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            dispatch(removeEmployee(employee.id as number));
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
