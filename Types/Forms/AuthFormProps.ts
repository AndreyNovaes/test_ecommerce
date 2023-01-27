export type FormField = {
  label: string;
  name: string;
  type: string;
  icon: JSX.Element;
}

type FormValues = {
  [key: string]: string;
}

type FormErrors = {
  [key: string]: boolean;
}

export type FormData = {
  values: FormValues;
  errors: FormErrors;
}

export type AuthFormProps = {
  formType: "login" | "register";
  fields: FormField[];
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
  formData: FormData;
}
