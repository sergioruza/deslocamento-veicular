import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SelectProps {
  options: string[];
  register: UseFormRegister<FieldValues>;
  label: string;
  name: string;
  disabled?: boolean;
}

const Select = ({ options, register, label, name, disabled }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <select disabled={disabled} {...register(name)}>
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
