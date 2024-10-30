import React from "react";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties; // Add style prop here
}

const ChartContainer: React.FC<IProps> = ({ children, style }) => {
  return (
    <div
      style={{
        width: "619px",
        height: "auto",
        backgroundColor: "#F4EBD7",
        borderRadius: "10px",
        padding: "20px",
        boxSizing: "border-box",
        ...style, // Apply custom style here
      }}
    >
      {children}
    </div>
  );
};

export default ChartContainer;
