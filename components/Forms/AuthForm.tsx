import { Button, VStack } from "@chakra-ui/react";
import { CustomInput } from "./CustomInput";

type FormField = {
  label: string;
  name: string;
  type: string;
  icon: JSX.Element;
  errorMessage: string;
}

type FormData = {
  [key: string]: string;
}

type AuthFormProps = {
  formType: "login" | "register";
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
  fields: FormField[];
  formData: FormData;
  errors: {
    [key: string]: boolean;
  };
}

export const AuthForm: React.FC<AuthFormProps> = ({
  formType,
  handleInputChange,
  handleOnClick,
  isLoading,
  fields,
  formData,
  errors,
}) => {
  return (
    <VStack spacing={4}>
      {fields.map((field: FormField) => (
        <CustomInput
          key={field.name}
          label={field.label}
          id={field.name}
          name={field.name}
          type={field.type}
          leftIcon={field.icon}
          onChange={handleInputChange}
          isLoading={isLoading}
          value={formData[field.name]}
          isInvalid={errors[field.name]}
          formErrorMessage={field.errorMessage}
        />
      ))}
      <Button
        onClick={handleOnClick}
        isLoading={isLoading}
        loadingText="Loading"
        colorScheme="teal"
        variant="solid"
        size="md"
        width="100%"
      >
        {formType}
      </Button>
    </VStack>
  );
};
