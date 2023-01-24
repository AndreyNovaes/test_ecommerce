export type CustomFormProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  leftIcon: JSX.Element;
  isInvalid: boolean;
  formErrorMessage: string;
  isLoading: boolean;
};
