import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SelectProps {
  options: string[];
  register: UseFormRegister<FieldValues>;
  label: string;
}

const Select = ({ options, register, label }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register('typeDocument')}>
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
