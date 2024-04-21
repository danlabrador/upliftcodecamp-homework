export interface EditProfileFields {
  editProfileName: string;
  setEditProfileName: React.Dispatch<React.SetStateAction<string>>;
  editProfileEmail: string;
  setEditProfileEmail: React.Dispatch<React.SetStateAction<string>>;
  editProfileRole: string;
  setEditProfileRole: React.Dispatch<React.SetStateAction<string>>;
  editProfileEmergencyContact: string;
  setEditProfileEmergencyContact: React.Dispatch<React.SetStateAction<string>>;
  editProfileEmergencyNumber: string;
  setEditProfileEmergencyNumber: React.Dispatch<React.SetStateAction<string>>;
  errorStatuses: Record<string, boolean>;
  setErrorStatuses: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}
