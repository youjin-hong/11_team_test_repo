import clsx from "clsx";

interface NormalListItemProps {
  width: number;
}

const NormalListItem: React.FC<NormalListItemProps> = ({ width }) => {
  return (
    <div
      className={clsx("p-2 rounded", {
        "w-48 bg-blue-500 text-white": width === 12,
        "w-32 bg-gray-300 text-gray-600": width === 8,
      })}
    >
      <p>가나다라마바사</p>
    </div>
  );
};

export default NormalListItem;
