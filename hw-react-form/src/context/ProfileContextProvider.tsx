import React, { useState } from 'react';
import ProfileContext from './ProfileContext';

interface ProfileContextProviderProps {
  children: React.ReactNode;
}

function ProfileContextProvider({ children }: ProfileContextProviderProps):JSX.Element {
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ phone, setPhone ] = useState<string>('');
  const [ emergencyContact, setEmergencyContact ] = useState<string>('');
  const [ emergencyNumber, setEmergencyNumber ] = useState<string>('');
  

  return (
    <ProfileContext.Provider value={{
      name,
      setName,
      email,
      setEmail,
      role: phone,
      setPosition: setPhone,
      emergencyContact,
      setEmergencyContact,
      emergencyNumber,
      setEmergencyNumber,
    }}>
      { children }
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
