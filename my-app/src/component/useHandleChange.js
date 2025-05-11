import { useState } from 'react';

export const useHandleChange = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return {
    inputs,
    handleChange,
  };
};
