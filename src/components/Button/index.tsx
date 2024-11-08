import clsx from "clsx";

interface ButtonProps {
  isPrimary: boolean;
  isDisabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ isPrimary, isDisabled }) => {
  return (
    <button
      className={clsx("p-2 rounded", {
        "bg-blue-500 text-white": isPrimary, // isPrimary가 true일 때
        "bg-gray-300 text-gray-600": !isPrimary, // isPrimary가 false일 때
        "opacity-50 cursor-not-allowed": isDisabled, // isDisabled가 true일 때
      })}
    >
      클릭해주세요
    </button>
  );
};

export default Button;
