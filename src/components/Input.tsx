import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

import { TextField } from '@mui/material';

interface InputProps {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  type?: string;
  errors: FieldErrors;
  disabled?: boolean;
}
function Input({
  register,
  placeholder,
  name,
  label,
  type,
  errors,
  disabled
}: InputProps) {
  return (
    <div>
      <TextField
        label={label}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      <span>{errors[name]?.message as string}</span>
    </div>
  );
}

export default Input;
