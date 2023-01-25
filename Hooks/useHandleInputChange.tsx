import { useState } from 'react';

export const useHandleInputChange = () => {
  const [form, setForm] = useState({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return { form, handleInputChange };
}
