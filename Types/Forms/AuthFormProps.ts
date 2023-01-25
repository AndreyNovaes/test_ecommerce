type isFieldInvalid = {
  [key: string]: boolean;
};


type formValues = {
  [key: string]: string;
};

export type isAnyFieldInvalid = {
  [key in "login" | "register"]: isFieldInvalid;
};

export type formValuesType = {
  [key in "login" | "register"]: formValues;
};


export type AuthFormProps = {
  formType: "login" | "register";
  fields: {
    [key in "login" | "register"]: {
      [key: string]: {
        label: string;
        name: string;
        type: string;
        icon: JSX.Element;
      }
    }
  };
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
  forms: formValuesType;
  errors: isAnyFieldInvalid;
};
