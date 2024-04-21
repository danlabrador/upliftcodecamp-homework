import { Link } from 'react-router-dom';
import upliftLogo from '../assets/uplift-logo.png';
import { useContext } from 'react';
import ProfileContext from '../context/ProfileContext';

export function NavBar(): JSX.Element {
  const profile = useContext(ProfileContext);

  const displayPicture = profile?.name ? (
    <div className='h-12 w-12 overflow-hidden rounded-full no-select'>
      <Link to='/profile'>
        <img src={`https://ui-avatars.com/api/?background=9050ad&color=fff&name=${profile.name.split(' ').join('+')}`} alt="display picture" />
      </Link>
    </div>) : ''

  return (
    <nav className='flex justify-between p-4 border-b w-full mb-8 h-75px fixed bg-white z-10'>
      <div className="west flex items-center gap-6">
        <h1 className='flex items-center gap-2 no-select'>
          <img className='h-9' src={upliftLogo} alt='uplift-logo' />
          <span className='text-xl pb-1'>
            <span className='font-bold uppercase'>Uplift</span>&nbsp;Central
          </span>
        </h1>
      </div>

      { displayPicture }
    </nav>
  );
}
