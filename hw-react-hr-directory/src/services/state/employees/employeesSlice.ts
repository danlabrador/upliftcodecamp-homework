import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../interfaces/User';
import { employees } from '../../api/employees';

const initialState: User[] = employees;

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
    removeEmployee: (state, action: PayloadAction<number>) => {
      return state.filter(employee => employee.id !== action.payload);
    },
    editEmployee: (state, action: PayloadAction<User>) => {
      const index = state.findIndex(employee => employee.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addEmployee, removeEmployee, editEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
