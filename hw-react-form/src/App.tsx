// Libraries
import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react';

// Components
import ProtectedLayout from './layout/ProtectedLayout'
import EditProfile from './layout/pages/EditProfile';
import Profile from './layout/pages/Profile';

// Models
import { EditProfileFields } from './models/EditProfileFields';

// Contexts
import EditProfileContext from './context/EditProfileContext';

function App() {
  const { errorStatuses } = useContext(EditProfileContext) as EditProfileFields;
  
  const layouts = !Object.values(errorStatuses).some(status => status) ? (<>
    <Route path='/' element={<EditProfile />}/>
    <Route path='/edit-profile' element={<EditProfile />} />
    <Route path='/profile' element={<Profile />}/>
  </>) : (<>
    <Route path='/' element={<Profile />}/>
    <Route path='/edit-profile' element={<EditProfile />} />
    <Route path='/profile' element={<Profile />}/>
  </>)

  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        { layouts }
      </Route>
    </Routes>
  )
}

export default App
