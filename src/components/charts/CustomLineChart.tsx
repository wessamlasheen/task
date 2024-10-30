import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

// Define types for props
interface DataPoint {
  [key: string]: string | number;
}

interface LineProps {
  dataKey: string;
  stroke: string;
}

interface CustomLineChartProps {
  title?: string;
  data: DataPoint[];
  lines: LineProps[];
  showArea?: boolean;
  areaFill?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  radioOptions?: string[];
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({
  title = "Activity Overview",
  data,
  lines,
  showArea = true,
  areaFill = "#C4C4C4",
  width = "619px",
  height = "478px",
  style,
  radioOptions = ["Hover to show the details"],
}) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#F4EBD7",
        borderRadius: "10px",
        padding: "20px",
        boxSizing: "border-box",
        ...style,
      }}
      onMouseEnter={() => setShowGrid(true)}
      onMouseLeave={() => setShowGrid(false)}
    >
      {/* Title */}
      <div>
        <span className="text-lg font-medium inline-flex mb-[17px]">
          {title}
        </span>
        <hr className="bg-[#7F7F7F]" />
      </div>

      {/* Dynamic Radio Buttons */}
      <div className="mt-[5px] mb-[23px] text-base flex items-center gap-[32px]">
        {radioOptions.map((label, index) => (
          <label key={index} className="flex items-center gap-[6px]">
            <input
              type="radio"
              name="details"
              value={label}
              className="appearance-none w-4 h-4 border border-[#956F17] rounded-full checked:bg-[#956F17] checked:border-[#956F17] focus:outline-none"
            />
            <span>{label}</span>
          </label>
        ))}
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: "calc(100% - 90px)" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={showGrid}
            />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} />
            <Tooltip formatter={(value) => [value, ""]} />

            {/* Area Background */}
            {showArea && (
              <Area
                type="monotone"
                dataKey={lines[0].dataKey}
                fill={areaFill}
                stroke="none"
              />
            )}

            {/* Lines */}
            {lines.map((line, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.stroke}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomLineChart;
