import React from "react";

interface ICardProps {
  subtitle?: string;
  number?: string | number;
}

const Card: React.FC<ICardProps> = ({
  subtitle = "Subtitle",
  number = "0",
}) => {
  return (
    <div
      className="w-[193px] h-[96px] bg-[#F4EBD7] flex flex-col pl-6 justify-center rounded-md shadow"
      style={{ backgroundColor: "#F4EBD7" }}
    >
      <span className="text-lg font-medium text-[#7F7F7F] mb-1">
        {subtitle}
      </span>
      <span className="text-[35px] font-medium text-[ #493421]">{number}</span>
    </div>
  );
};

export default Card;
