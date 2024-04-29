import { User } from '../../interfaces/User';
import { employees, getLastId } from './employees';

describe('employees', () => {
  it('should contain an array of employees', () => {
    expect(Array.isArray(employees)).toBe(true);
  });

  it('should have at least one employee', () => {
    expect(employees.length).toBeGreaterThan(0);
  });

  it('should have employees with valid properties', () => {
    employees.forEach(employee => {
      expect(employee).toHaveProperty('email');
      expect(employee).toHaveProperty('emergencyContactName');
      expect(employee).toHaveProperty('emergencyContactNumber');
      expect(employee).toHaveProperty('id');
      expect(employee).toHaveProperty('name');
      expect(employee).toHaveProperty('role');
    });
  });

  it('should get the last id correctly', () => {
    const lastId = getLastId(employees);
    const maxId = Math.max(...employees.map(employee => employee.id as number));
    expect(lastId).toEqual(maxId);
  });

  it('should return 0 the list is empty', () => {
    const employees = [] as User[];
    const lastId = getLastId(employees);
    expect(lastId).toEqual(0);
  });
});
