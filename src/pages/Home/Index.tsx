import { useState } from "react";
import Card from "../../components/Card/Index";
import CustomAreaChart from "../../components/charts/CustomAreaChart";
import CustomLineChart from "../../components/charts/CustomLineChart";
import ProgressChart from "../../components/charts/ProgressChart";
import Table from "../../components/tables/Table";

const Home = () => {
  // Set up local state for card data with initial values
  const [cardData] = useState([
    { subtitle: "Tasks Completed", number: "70" },
    { subtitle: "New Messages", number: "200" },
    { subtitle: "Pending ", number: "1,800" },
    { subtitle: "New Comments", number: "1,500" },
    { subtitle: "Files Uploaded", number: "20,000" },
    { subtitle: "Projects in ", number: "1,000" },
  ]);

  return (
    <div className="bg-[#F8F7F7] py-7 px-[24px] mb-8">
      <div className="flex  gap-[25px]  mb-8">
        {cardData.map((card, index) => (
          <Card key={index} subtitle={card.subtitle} number={card.number} />
        ))}
      </div>
      <div className="flex gap-11">
        <div className="flex flex-col gap-7">
          <CustomAreaChart
            title="Client activity"
            data={[
              { name: "1Dec", value: 50 },
              { name: "8Dec", value: 150 },
              { name: "16Dec", value: 60 },
              { name: "31Dec", value: 160 },
            ]}
            areas={[
              {
                dataKey: "value",
                fill: "#109CF1",
                stroke: "#109CF1",
                fillOpacity: parseFloat("0.1"),
              },
            ]}
            radioOptions={["New Comers"]}
          />
          <CustomLineChart
            title="Shipments Chart"
            data={[
              { name: "1Dec", value1: 50, value2: 80 },
              { name: "8Dec", value1: 100, value2: 120 },
              { name: "16Dec", value1: 70, value2: 140 },
              { name: "31Dec", value1: 150, value2: 100 },
            ]}
            lines={[
              { dataKey: "value1", stroke: "#FF9500" },
              { dataKey: "value2", stroke: "#347AE2" },
            ]}
            showArea={false}
            radioOptions={["imported shipment", "distributed shipment"]}
          />
          <Table style={{ padding: "8px 9px 25px 9px" }} />
        </div>
        <div className="flex flex-col gap-7">
          <ProgressChart />
          <CustomAreaChart
            title="Client Activity Comparison"
            data={[
              { name: "1Dec", value1: 50, value2: 70, value3: 40 },
              { name: "8Dec", value1: 150, value2: 130, value3: 100 },
              { name: "16Dec", value1: 60, value2: 80, value3: 90 },
              { name: "31Dec", value1: 160, value2: 140, value3: 120 },
            ]}
            areas={[
              {
                dataKey: "value1",
                fill: "#6360A3",
                stroke: "#6360A3",
                fillOpacity: 1, // Set fill opacity to 1 for solid color
              },
              {
                dataKey: "value2",
                fill: "#779A79",
                stroke: "#779A79",
                fillOpacity: 1, // Set fill opacity to 1 for solid color
              },
              {
                dataKey: "value3",
                fill: "#F0CF83",
                stroke: "#F0CF83",
                fillOpacity: 1, // Set fill opacity to 1 for solid color
              },
            ]}
            showGridOnHover={true}
            radioOptions={["Facebook", "Instagram", "Other Client"]}
            yAxisDomain={[0, 100]} // Custom Y-axis domain
            yAxisTicks={[0, 50, 100]} // Custom Y-axis ticks
          />

          <CustomLineChart
            title="Expense Activity"
            data={[
              { name: "1Dec", value: 0 },
              { name: "8Dec", value: 100 },
              { name: "16Dec", value: 150 },
              { name: "31Dec", value: 60 },
            ]}
            lines={[{ dataKey: "value", stroke: "#109CF1" }]}
            showArea={true}
            areaFill="#C4C4C4"
            radioOptions={["hover to show details"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
