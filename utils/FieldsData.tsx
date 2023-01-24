import { Fields } from "../Types/Form/Fields";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { BsPersonCircle } from "react-icons/bs";

export const fieldsData: Fields = {
  email: {                                
    label: "Email",
    name: "email",
    type: "email",
    icon: <EmailIcon />
  },
  password: {
    label: "Password",
    name: "password",
    type: "password",
    icon: <LockIcon  />
  },
  name: {
    label: "Name",
    name: "name",
    type: "text",
    icon: <BsPersonCircle />
  }
};
  