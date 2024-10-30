import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  [key: string]: string | number;
}

interface AreaProps {
  dataKey: string;
  fill: string;
  stroke: string;
  fillOpacity?: number;
}

interface CustomAreaChartProps {
  title?: string;
  data: DataPoint[];
  areas: AreaProps[];
  width?: string;
  height?: string;
  showGridOnHover?: boolean;
  style?: React.CSSProperties;
  radioOptions?: string[];
  yAxisDomain?: [number, number];
  yAxisTicks?: number[];
  showLegend?: boolean;
}

const CustomAreaChart: React.FC<CustomAreaChartProps> = ({
  title = "Activity Overview",
  data,
  areas = [{ dataKey: "value", fill: "#C4C4C4", stroke: "#109CF1" }],
  width = "619px",
  height = "478px",
  showGridOnHover = true,
  style,
  radioOptions = ["Option 1", "Option 2", "Option 3"],
  yAxisDomain = [0, 200],
  yAxisTicks = [0, 50, 100, 150, 200],
  showLegend = false,
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
        position: "relative",
        ...style,
      }}
      onMouseEnter={() => setShowGrid(showGridOnHover)}
      onMouseLeave={() => setShowGrid(false)}
    >
      {/* Title */}
      <div>
        <span className="text-lg font-medium inline-flex mb-[17px]">
          {title}
        </span>
        <hr className="bg-[#7F7F7F]" />
      </div>

      {/* Radio Options */}
      <div className="mt-[5px] mb-[23px] text-base flex items-center space-x-8">
        {radioOptions.map((label, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name="clientOption"
              value={label}
              className="appearance-none w-3 h-3 border border-[#956F17] rounded-full checked:bg-[#956F17] checked:border-[#956F17] focus:outline-none"
            />
            <span className=" text-base font-medium">{label}</span>
          </label>
        ))}
      </div>

      {/* Chart */}
      <div
        style={{
          width: "100%",
          height: "calc(100% - 90px)",
          position: "relative",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 40 }} // Add margins to give space for labels
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={showGrid}
            />
            <XAxis
              dataKey="name"
              tickMargin={10} // Adjust spacing between X-axis line and labels
              axisLine={false}
              tick={{
                fontSize: "12px",
                dy: 20,
                textAnchor: "middle",
              }}
            />
            <YAxis
              domain={yAxisDomain}
              ticks={yAxisTicks}
              width={40}
              axisLine={false}
              tick={{
                fontSize: "12px",
                dx: -20, // Reduce horizontal space for better fit
                textAnchor: "end",
              }}
            />
            <Tooltip />
            {showLegend && <Legend />}
            {areas.map((area, index) => (
              <Area
                key={index}
                type="monotone"
                dataKey={area.dataKey}
                fill={area.fill}
                stroke={area.stroke}
                fillOpacity={area.fillOpacity || 1}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomAreaChart;
