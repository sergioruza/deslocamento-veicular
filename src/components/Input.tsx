import React, { ChangeEvent, useState } from 'react';

interface InputProps {
  onChange: (value: string) => void;
  name: string;
  type: string;
  placeholder: string;
}

function Input({ onChange, type, placeholder, name }: InputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Chama a função de callback do componente pai passando o novo valor
    onChange(newValue);
  };

  return (
    <div>
      <label>{name}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
