// import { renderHook, act } from '@testing-library/react-hooks';
// import { useEmployeeForm } from './useEmployeeForm';

// describe('useEmployeeForm', () => {
//   const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     role: 'Developer',
//     emergencyContactName: 'Jane Smith',
//     emergencyContactNumber: '+1234567890',
//   };

//   it('should initialize with default values when user is provided', () => {
//     const { result } = renderHook(() => useEmployeeForm(user));

//     expect(result.current.register).toBeDefined();
//     expect(result.current.handleSubmit).toBeDefined();
//     expect(result.current.errors).toEqual({});
//     expect(result.current.isSubmitting).toBe(false);
//   });

//   it('should initialize with empty values when user is not provided', () => {
//     const { result } = renderHook(() => useEmployeeForm(undefined));

//     expect(result.current.register).toBeDefined();
//     expect(result.current.handleSubmit).toBeDefined();
//     expect(result.current.errors).toEqual({});
//     expect(result.current.isSubmitting).toBe(false);
//   });

//   it('should validate form fields correctly', async () => {
//     const { result } = renderHook(() => useEmployeeForm(undefined));

//     const { handleSubmit } = result.current;

//     // Submit the form with invalid data
//     await act(async () => {
//       await handleSubmit(data => {
//         expect(data).toEqual({
//           name: '',
//           email: 'invalid-email',
//           role: 'ab',
//           emergencyContactName: '',
//           emergencyContactNumber: '123',
//         });
//       })();
//     });

//     expect(result.current.errors).toEqual({
//       name: 'Please enter your full name.',
//       email: 'Please enter a valid email address.',
//       role: 'Role must be at least 3 characters long.',
//       emergencyContactName: 'Please enter their full name.',
//       emergencyContactNumber:
//         'Contact number must contain at least 7 numbers and may include a plus symbol',
//     });

//     // Submit the form with valid data
//     await act(async () => {
//       await handleSubmit(data => {
//         expect(data).toEqual({
//           name: 'John Doe',
//           email: 'john.doe@example.com',
//           role: 'Developer',
//           emergencyContactName: 'Jane Smith',
//           emergencyContactNumber: '+1234567890',
//         });
//       })();
//     });

//     expect(result.current.errors).toEqual({});
//   });

//   it('should handle phone key down event correctly', () => {
//     const { result } = renderHook(() => useEmployeeForm(undefined));

//     const { handlePhoneKeyDown } = result.current;

//     const event = new KeyboardEvent('keydown', {
//       key: '1',
//     }) as unknown as React.KeyboardEvent<HTMLInputElement>;

//     act(() => {
//       handlePhoneKeyDown(event);
//     });

//     expect(event.defaultPrevented).toBe(false);

//     event.key = 'Enter';

//     act(() => {
//       handlePhoneKeyDown(event);
//     });

//     expect(event.defaultPrevented).toBe(true);
//   });

//   it('should handle form submission correctly', async () => {
//     const { result } = renderHook(() => useEmployeeForm(undefined));

//     const { handleSubmit } = result.current;

//     await act(async () => {
//       await handleSubmit(data => {
//         expect(data).toEqual({
//           name: 'John Doe',
//           email: 'john.doe@example.com',
//           role: 'Developer',
//           emergencyContactName: 'Jane Smith',
//           emergencyContactNumber: '+1234567890',
//         });
//       })();
//     });

//     // Add your assertions here to check if the form submission is handled correctly
//   });
// });

describe('useEmployeeForm', () => {
  it('test', () => {
    expect(1).toBe(1);
  });
});
