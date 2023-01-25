import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { BsPersonCircle } from "react-icons/bs";
import { Fields } from "../../Types/Forms/Fields";

export const fieldsData: Fields = {
  login: {
    email: {
      label: "Email",
      name: "email",
      type: "email",
      errorMessage: "Please enter a valid email",
      icon: <EmailIcon />,
    },
    password: {
      label: "Password",
      name: "password",
      type: "password",
      errorMessage: "Please enter a valid password",
      icon: <LockIcon />,
    },
  },
  register: {
    username: {
      label: "Username",
      name: "username",
      type: "text",
      errorMessage: "Please enter a valid username",
      icon: <BsPersonCircle />,
    },
    email: {
      label: "Email",
      name: "email",
      type: "email",
      errorMessage: "Please enter a valid email",
      icon: <EmailIcon />,
    },
    password: {
      label: "Password",
      name: "password",
      type: "password",
      errorMessage: "Please enter a valid password",
      icon: <LockIcon />,
    },
  },
};
