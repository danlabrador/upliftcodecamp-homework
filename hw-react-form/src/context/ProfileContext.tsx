import { createContext } from "react";
import { ProfileFields } from "../models/ProfileFields";

const ProfileContext = createContext<ProfileFields | undefined>(undefined)

export default ProfileContext;
