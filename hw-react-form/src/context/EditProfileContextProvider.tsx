import React, { useState } from 'react';
import EditProfileContext from './EditProfileContext';

interface EditProfileContextProviderProps {
  children: React.ReactNode;
}

function EditProfileContextProvider({ children }: EditProfileContextProviderProps):JSX.Element {
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ phone, setPhone ] = useState<string>('');
  const [ emergencyContact, setEmergencyContact ] = useState<string>('');
  const [ emergencyNumber, setEmergencyNumber ] = useState<string>('');
  const [ fieldStatuses, setFieldStatuses ] = useState<Record<string, boolean>>({});


  return (
    <EditProfileContext.Provider value={{
      editProfileName: name,
      setEditProfileName: setName,
      editProfileEmail: email,
      setEditProfileEmail: setEmail,
      editProfileRole: phone,
      setEditProfileRole: setPhone,
      editProfileEmergencyContact: emergencyContact,
      setEditProfileEmergencyContact: setEmergencyContact,
      editProfileEmergencyNumber: emergencyNumber,
      setEditProfileEmergencyNumber: setEmergencyNumber,
      errorStatuses: fieldStatuses,
      setErrorStatuses: setFieldStatuses
    }}>
      { children }
    </EditProfileContext.Provider>
  );
}

export default EditProfileContextProvider;
