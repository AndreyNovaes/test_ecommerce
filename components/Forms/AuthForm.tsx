import { Button, VStack } from "@chakra-ui/react";
import { AuthFormProps } from "../../Types/Forms/AuthFormProps";
import { fieldsData } from "../../utils/Forms/FieldsData";
import { CustomInput } from "./CustomInput";

export const AuthForm: React.FC<AuthFormProps> = ({
  formType,
  handleInputChange,
  handleOnClick,
  isLoading,
  errors,
  forms,
}) => {
  return (
    <VStack spacing={4}>
      {Object.values(fieldsData[formType]).map((field) => (
        <CustomInput
          key={field.name}
          label={field.label}
          id={field.name}
          name={field.name}
          type={field.type}
          leftIcon={field.icon}
          onChange={handleInputChange}
          isLoading={isLoading}
          value={ forms[formType][field.name] }
          isInvalid={errors[formType][field.name]}
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
