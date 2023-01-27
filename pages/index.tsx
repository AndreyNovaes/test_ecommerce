import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useAuth } from '../Hooks/useAuth';
import { useState } from 'react';
import { AuthForm } from '../components/Forms/AuthForm';
import axios from 'axios';

const loginFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    icon: <EmailIcon />,
    errorMessage: 'Invalid email'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    icon: <LockIcon />,
    errorMessage: 'Invalid password'
  },
];

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);
  const [authState, login, logout] = useAuth();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({ email: false, password: false });
    const { email, password } = formData;
    if (!email) {
      setErrors({ ...errors, email: true });
    }
    if (!password) {
      setErrors({ ...errors, password: true });
    }
    if (email && password) {
      try {
        const response = await axios.post('/api/auth/login', { email, password });
        login(response.data, localStorage.getItem('token') || '');
      } catch (error) {
        console.log(error);
      }
    }
    setIsLoading(false);
  };
  return (
    <AuthForm
      formType="login"
      handleInputChange={handleInputChange}
      handleOnClick={handleOnClick}
      isLoading={isLoading}
      fields={loginFields}
      formData={formData}
      errors={errors}
    />
  );
};

