import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EmployeeForm } from './pages/private/EmployeeForm';
import Employees from './pages/private/Employees';
import PrivateLayout from './pages/private/PrivateLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Employees />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/add" element={<EmployeeForm />} />
          <Route path="/employees/edit/:id" element={<EmployeeForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
