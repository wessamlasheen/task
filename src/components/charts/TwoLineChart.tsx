import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1Dec", value1: 50, value2: 80 },
  { name: "8Dec", value1: 100, value2: 120 },
  { name: "16Dec", value1: 70, value2: 140 },
  { name: "31Dec", value1: 150, value2: 100 },
];

const TwoLineChart = () => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div
      style={{
        width: "619px",
        height: "478px",
        backgroundColor: "#F4EBD7",
        borderRadius: "10px",
        padding: "20px",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => setShowGrid(true)}
      onMouseLeave={() => setShowGrid(false)}
    >
      {/* Subtitle */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Performance Overview
        </h2>
      </div>

      {/* Radio Buttons */}
      <div className="flex gap-4 mb-6">
        {["Line 1", "Line 2"].map((label, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name="lineOption"
              value={label}
              className="appearance-none w-4 h-4 border border-[#956F17] rounded-full checked:bg-[#956F17] checked:border-[#956F17] focus:outline-none"
            />
            <span className="text-gray-700">{label}</span>
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
            <Tooltip />
            <Legend />
            {/* Two Lines */}
            <Line type="monotone" dataKey="value1" stroke="#109CF1" />
            <Line type="monotone" dataKey="value2" stroke="#FF5733" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TwoLineChart;
