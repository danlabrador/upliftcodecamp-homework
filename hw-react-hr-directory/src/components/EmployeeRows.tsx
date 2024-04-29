import { EmployeeRow } from './EmployeeRow';
import { User } from '../interfaces/User';

interface EmployeeRowsProps {
  employees: User[];
}
export function EmployeeRows({ employees }: EmployeeRowsProps) {
  return (
    <>
      {employees.map((employee, index) => (
        <EmployeeRow key={employee.id} employee={employee} isOdd={index % 2 !== 0} />
      ))}
    </>
  );
}
export interface EmployeeTableProps {
  employees: User[];
}
