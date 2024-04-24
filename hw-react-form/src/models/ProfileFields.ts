export interface ProfileFields {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  role: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  emergencyContact: string;
  setEmergencyContact: React.Dispatch<React.SetStateAction<string>>;
  emergencyNumber: string;
  setEmergencyNumber: React.Dispatch<React.SetStateAction<string>>;
}
