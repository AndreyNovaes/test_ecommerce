import {
  FormControl, FormErrorMessage, FormLabel,
  Input, InputGroup, InputLeftElement
} from "@chakra-ui/react";
import { CustomFormProps } from "../Types/Form/CustomFormProps";

export const CustomInput: React.FC<CustomFormProps> = ({ id, label, name, type, value, onChange, leftIcon, isInvalid, formErrorMessage, isLoading }) => (
  <FormControl>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={leftIcon}
      />
      <Input
        isDisabled={isLoading}
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
      />
      {isInvalid && <FormErrorMessage>{formErrorMessage}</FormErrorMessage>}
    </InputGroup>
  </FormControl>
);
