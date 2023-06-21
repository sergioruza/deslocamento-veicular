interface ButtonProps {
  type: 'button' | 'submit';
  onClick?: () => void;
  actionName: string;
}
const Button = ({ type, onClick, actionName }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {actionName}
    </button>
  );
};

export default Button;
