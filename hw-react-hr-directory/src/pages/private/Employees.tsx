import { EmployeeTable } from '../../components/EmployeeTable';
import { RootState } from '../../services/state/store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/ui/Button';
import H2 from '../../components/ui/H2';
import { useEmployeeForm } from '../../hooks/useEmployeeForm';

const Employees = () => {
  const employees = useSelector((state: RootState) => state.employees);
  const { clearLocalStorage } = useEmployeeForm();
  const navigate = useNavigate();
  return (
    <main data-cy="main" className="space-y-8">
      <H2 value="Employees" />
      <EmployeeTable employees={employees} />
      <Button
        onClick={() => {
          navigate('/employees/add');
          clearLocalStorage();
        }}
      >
        Add Employee
      </Button>
    </main>
  );
};

export default Employees;
