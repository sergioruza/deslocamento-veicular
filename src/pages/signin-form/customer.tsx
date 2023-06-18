import React, { FormEvent, useState } from 'react';

import Input from '../../components/Input';

interface FormValues {
  name: string;
  document: string;
}

function customer() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    document: ''
  });

  const handleInputChange = (name: keyof FormValues, value: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(formValues);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        onChange={(value) => handleInputChange('name', value)}
      />

      <Input
        type="text"
        name="document"
        placeholder="Digite o documento"
        onChange={(value) => handleInputChange('document', value)}
      />
    </form>
  );
}

export default customer;
