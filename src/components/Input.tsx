import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  type?: string;
  errors: FieldErrors;
}

function Input({
  register,
  placeholder,
  name,
  label,
  type,
  errors
}: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(name)} />
      <span>{errors[name]?.message as string}</span>
    </div>
  );
}

export default Input;
