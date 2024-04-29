import { EmployeeTableProps, EmployeeRows } from './EmployeeRows';

export function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Emergency Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeRows employees={employees} />
      </tbody>
    </table>
  );
}
