import { createContext } from "react";
import { EditProfileFields } from "../models/EditProfileFields";

const EditProfileContext = createContext<EditProfileFields | undefined>(undefined)

export default EditProfileContext;
