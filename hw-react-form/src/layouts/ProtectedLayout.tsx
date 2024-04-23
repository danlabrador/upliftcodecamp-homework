import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

function ProtectedLayout() {
  return (
    <div className={'flex flex-col items-center mx-auto'}>
      <NavBar />
      <div className='h-75px mb-8'></div>
      <Outlet />
    </div>
  );
}

export default ProtectedLayout;
