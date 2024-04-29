import { User } from '../../interfaces/User';

export const employees: User[] = [
  {
    email: 'johndoe@upliftcodecamp.com',
    emergencyContactName: 'Jane Doe',
    emergencyContactNumber: '+639123456789',
    id: 1,
    name: 'John Doe',
    role: 'Teacher',
  },
  {
    email: 'alicejohnson@upliftcodecamp.com',
    emergencyContactName: 'Bob Johnson',
    emergencyContactNumber: '+639987654321',
    id: 2,
    name: 'Alice Johnson',
    role: 'Coordinator',
  },
  {
    email: 'michaelsmith@upliftcodecamp.com',
    emergencyContactName: 'Sarah Smith',
    emergencyContactNumber: '+639112233445',
    id: 3,
    name: 'Michael Smith',
    role: 'Administrator',
  },
  {
    email: 'emilyturner@upliftcodecamp.com',
    emergencyContactName: 'David Turner',
    emergencyContactNumber: '+639223344556',
    id: 4,
    name: 'Emily Turner',
    role: 'Counselor',
  },
  {
    email: 'davidlee@upliftcodecamp.com',
    emergencyContactName: 'Lucy Lee',
    emergencyContactNumber: '+639334455667',
    id: 5,
    name: 'David Lee',
    role: 'Assistant Teacher',
  },
  {
    email: 'sophiamartinez@upliftcodecamp.com',
    emergencyContactName: 'Oscar Martinez',
    emergencyContactNumber: '+639445566778',
    id: 6,
    name: 'Sophia Martinez',
    role: 'IT Support',
  },
  {
    email: 'lucasgarcia@upliftcodecamp.com',
    emergencyContactName: 'Emma Garcia',
    emergencyContactNumber: '+639556677889',
    id: 7,
    name: 'Lucas Garcia',
    role: 'Librarian',
  },
  {
    email: 'emmawilson@upliftcodecamp.com',
    emergencyContactName: 'Noah Wilson',
    emergencyContactNumber: '+639667788990',
    id: 8,
    name: 'Emma Wilson',
    role: 'Accountant',
  },
  {
    email: 'noahanderson@upliftcodecamp.com',
    emergencyContactName: 'Ava Anderson',
    emergencyContactNumber: '+639778899001',
    id: 9,
    name: 'Noah Anderson',
    role: 'Maintenance',
  },
  {
    email: 'oliviaroberts@upliftcodecamp.com',
    emergencyContactName: 'William Roberts',
    emergencyContactNumber: '+639889900112',
    id: 10,
    name: 'Olivia Roberts',
    role: 'Receptionist',
  },
];

export const getLastId = (employees: User[]): number => {
  if (employees.length === 0) {
    return 0;
  }

  return Math.max(...employees.map(employee => employee.id as number));
};
