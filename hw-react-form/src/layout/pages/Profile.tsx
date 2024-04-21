import { useContext, useEffect } from "react";
import ProfileContext from "../../context/ProfileContext";
import { ProfileFields } from "../../models/ProfileFields";
import { Container } from "../../components/Container";
import { Header2 } from "../../components/Header2";
import { Link, useNavigate } from "react-router-dom";
import EditProfileContext from "../../context/EditProfileContext";
import { EditProfileFields } from "../../models/EditProfileFields";

function Profile():JSX.Element {
  const { name, email, role, emergencyContact, emergencyNumber } = useContext(ProfileContext) as ProfileFields;
  const { errorStatuses } = useContext(EditProfileContext) as EditProfileFields;
  const profile = useContext(ProfileContext) as ProfileFields;
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.values(errorStatuses).some(status => status)) {
      navigate('/edit-profile');
    }

    if (Object.values(profile).some(value => value === '')) {
      navigate('/edit-profile');
    }
  }, [errorStatuses, navigate, profile])
  
  return (
    <Container>
      <Header2 title='Profile' />
      <section className='flex items-center bg-gray-100 p-4 mb-4 rounded-lg'>
        <img src={`https://ui-avatars.com/api/?background=9050ad&color=fff&name=${name.split(' ').join('+')}`} alt='profile' className='h-20 rounded-full' />
        <div className='ml-4'>
          <p className='text-xl font-bold'>{ name }</p>
          <p className="text-xs">{ role }</p>
          <p className='text-xs'>{ email }</p>
        </div>
      </section>

      <p>Emergency Contact: <strong>{ emergencyContact }</strong></p>
      <p>Emergency Number: <strong>{ emergencyNumber }</strong></p>

      <Link to='/edit-profile'>
        <button className='border border-1 bg-white border-gray-500 hover:border-gray-600 hover:bg-gray-200 active:border-gray-700 py-2 px-4 rounded mt-4'>
          Edit Profile
        </button>
      </Link>
    </Container>
  );
}

export default Profile;
