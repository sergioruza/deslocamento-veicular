import { FieldValues, UseFormRegister } from 'react-hook-form';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface SelectProps {
  options: string[];
  register: UseFormRegister<FieldValues>;
  label: string;
  name: string;
  disabled?: boolean;
}

const DefaultSelect = ({
  options,
  register,
  label,
  name,
  disabled
}: SelectProps) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select disabled={disabled} {...register(name)}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DefaultSelect;
