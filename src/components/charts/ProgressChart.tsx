import React from "react";

const progressData = [
  {
    title: "Progress 1",
    value: 70,
    bgColor: "#FFF5CC",
    fillColor: "#D7A53F",
  },
  {
    title: "Progress 2",
    value: 30,
    bgColor: "#F3E5F5",
    fillColor: "#7B1FA2",
  },
  {
    title: "Progress 3",
    value: 50,
    bgColor: "#CCF8FE",
    fillColor: "#02A0FC",
  },
  {
    title: "Progress 4",
    value: 90,
    bgColor: "#FFE5D3",
    fillColor: "#FF3A29",
  },
];

interface ProgressChartProps {
  style?: React.CSSProperties;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ style }) => {
  return (
    <div
      style={{
        width: "619px",
        height: "338px",
        backgroundColor: "#F4EBD7",
        borderRadius: "10px",
        padding: "20px",
        boxSizing: "border-box",
        ...style, // Apply custom styles here
      }}
    >
      {/* Subtitle */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Client Activity Overview
        </h2>
      </div>

      {/* Radio Buttons */}
      <div className="flex justify-between items-center mb-6">
        {["Option 1", "Option 2", "Option 3", "Option 4"].map(
          (label, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="radio"
                name="clientOption"
                value={label}
                className="appearance-none w-4 h-4 border border-[#956F17] rounded-full checked:bg-[#956F17] checked:border-[#956F17] focus:outline-none"
              />
              <span className="text-gray-700">{label}</span>
            </label>
          )
        )}
      </div>

      {/* Progress Bars */}
      <div className="space-y-4">
        {progressData.map((progress, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-gray-600 mb-1">{progress.title}</span>
            <div
              className="w-full rounded-full h-2"
              style={{
                backgroundColor: progress.bgColor,
              }}
            >
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${progress.value}%`,
                  backgroundColor: progress.fillColor,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;
