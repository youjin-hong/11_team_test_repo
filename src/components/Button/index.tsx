import ButtonUI from "./ui/ButtonUI";

interface ButtonProps {
  isPrimary: boolean;
  isDisabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ isPrimary, isDisabled }) => {
  return <ButtonUI isPrimary={isPrimary} isDisabled={isDisabled}></ButtonUI>;
};

export default Button;
