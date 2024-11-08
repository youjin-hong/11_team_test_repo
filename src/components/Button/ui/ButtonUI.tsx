import clsx from "clsx";

import { handleClick } from "../logic/handleClick";

interface ButtonUIProps {
  isPrimary: boolean;
  isDisabled: boolean;
}

const ButtonUI: React.FC<ButtonUIProps> = ({ isPrimary, isDisabled }) => {
  return (
    <button
      onClick={handleClick}
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

export default ButtonUI;
