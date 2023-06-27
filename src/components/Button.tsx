interface ButtonProps {
  type: 'button' | 'submit';
  onClick?: () => void;
  actionName: string;
}
import { Button } from '@mui/material';
const DefaultButton = ({ type, onClick, actionName }: ButtonProps) => {
  return (
    <Button type={type} onClick={onClick}>
      {actionName}
    </Button>
  );
};

export default DefaultButton;
