import { Container } from "../components/Container";
import { Header2 } from "../components/Header2";
import { Header3 } from "../components/Header3";
import { InputTextGroup } from "../components/InputTextGroup";
import { FieldSet } from "../components/FieldSet";
import { Button } from "../components/Button";
import EditProfileContext from "../contexts/EditProfileContext";
import { useContext, useEffect, useState } from "react";
import { EditProfileFields } from "../models/EditProfileFields";
import { ProfileFields } from "../models/ProfileFields";
import ProfileContext from "../contexts/ProfileContext";
import { useNavigate } from "react-router-dom";

function EditProfile():JSX.Element {
  const navigate = useNavigate();
  
  const {
    editProfileName, editProfileEmail, editProfileRole, editProfileEmergencyContact, editProfileEmergencyNumber,
    setEditProfileName, setEditProfileEmail, setEditProfileRole, setEditProfileEmergencyContact,
    setEditProfileEmergencyNumber, errorStatuses
  } =  useContext(EditProfileContext) as EditProfileFields;

  const { name, email, role, emergencyContact, emergencyNumber, setName, setEmail, setPosition, setEmergencyContact, setEmergencyNumber } =  useContext(ProfileContext) as ProfileFields;

  const [ errorCount, setErrorCount ] = useState<number>(0);
  const [ isBtnDisabled, setIsBtnDisabled ] = useState<boolean>(true);

  const handleMouseOver = () => {
    if (Object.values(errorStatuses).some(status => status)) {
      setErrorCount(Object.values(errorStatuses).filter(status => status).length);
      return;
    }
    
    setErrorCount(0);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName(editProfileName);
    setEmail(editProfileEmail);
    setPosition(editProfileRole);
    setEmergencyContact(editProfileEmergencyContact);
    setEmergencyNumber(editProfileEmergencyNumber);

    navigate('/profile');
  }

  // Set Profile to Edit Profile
  useEffect(() => {
    setEditProfileName(name);
    setEditProfileEmail(email);
    setEditProfileRole(role);
    setEditProfileEmergencyContact(emergencyContact);
    setEditProfileEmergencyNumber(emergencyNumber);
  }, [name, email, role, emergencyContact, emergencyNumber, setEditProfileName, setEditProfileEmail, setEditProfileRole, setEditProfileEmergencyContact, setEditProfileEmergencyNumber])

  useEffect(()=>{
    if (errorCount === 0) {
      setIsBtnDisabled(false);
      return;
    }
    
    setIsBtnDisabled(true);
  }, [errorCount])
  

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Header2 title={`${name ? 'Edit' : 'Add'} Profile`} />

        <FieldSet>
          <Header3 title='Basic Information'/>
          <InputTextGroup label='Full Name' id='name' type='text' isRequired={true} value={editProfileName} setValue={setEditProfileName} />
          <InputTextGroup label='Email Address' id='email' type='email' isRequired={true} value={editProfileEmail} setValue={setEditProfileEmail}  />
          <InputTextGroup label='Role' id='role' type='text' isRequired={true} value={editProfileRole} setValue={setEditProfileRole} />
        </FieldSet>

        <FieldSet>
          <Header3 title='In Case of Emergency' />
          <InputTextGroup label='Contact Person' id='contact-name' type='text' isRequired={true} value={editProfileEmergencyContact} setValue={setEditProfileEmergencyContact} />
          <InputTextGroup label={`Contact Person's Number`} id='phone' type='phone' isRequired={true} value={editProfileEmergencyNumber} setValue={setEditProfileEmergencyNumber} />
        </FieldSet>

        <Button isSubmitBtn={true} handleMouseOver={handleMouseOver} isBtnDisabled={isBtnDisabled}>Submit</Button>
      </form>
    </Container>
  );
}

export default EditProfile;
