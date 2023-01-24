import { CustomInput } from "./CustomInput";
import { Fields } from "../Types/Form/Fields";
import { fieldsData } from "../utils/FieldsData";

type AuthFormProps = {
  formType: "login" | "signup";
  fields: Fields;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
  errors: { [key in keyof Fields]: boolean; };
  forms: { [key in keyof Fields]: string; };
};



export default function AuthForm({
  formType,
  fields,
  handleInputChange,
  handleOnClick,
  isLoading,
  errors,
  forms,
}: AuthFormProps) {
  return (
    <VStack>
     
