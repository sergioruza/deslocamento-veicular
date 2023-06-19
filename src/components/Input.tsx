import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  type?: string;
}

function Input({ register, placeholder, name, label, type }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(name)} />
    </div>
  );
}

export default Input;
