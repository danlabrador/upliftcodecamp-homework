import { Link } from 'react-router-dom';
import upliftLogo from '../assets/uplift-logo.png';

export function Nav() {
  return (
    <nav
      data-cy="nav"
      className="flex justify-between p-4 border-b w-full h-[75px] fixed bg-white z-10"
    >
      {/* Navigation */}
      <div className="west flex items-center gap-6">
        <Link to="/">
          <h1 data-cy="nav__logo" className="flex items-center gap-2 select-none">
            <img className="h-9" src={upliftLogo} alt="uplift-logo" />
            <span className="text-xl pb-1">
              <span className="font-bold uppercase">Uplift</span>&nbsp;Central
            </span>
          </h1>
        </Link>
        <div className="pb-1">
          <Link className="hover:text-indigo-600 active:text-indigo-800" to="/employees">
            Employees
          </Link>
        </div>
      </div>

      {/* User */}
      <div className="h-12 w-12 overflow-hidden rounded-full select-none">
        <img
          className="select-none"
          src={`https://ui-avatars.com/api/?background=9050ad&color=fff&name=Uplift+Code+Camp`}
          alt="display picture"
        />
      </div>
    </nav>
  );
}
