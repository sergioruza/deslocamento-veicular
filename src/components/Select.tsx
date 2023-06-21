import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SelectProps {
  options: string[];
  register: UseFormRegister<FieldValues>;
  label: string;
  name: string;
}

const Select = ({ options, register, label, name }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(name)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
