"use client";

import { useContext } from "react";
import { Pie, PieChart, ResponsiveContainer,  Legend, Tooltip } from "recharts";
import { MyContext } from "../layout";



const Stats = () => {
      const { friendData } = useContext(MyContext);
      const data = [
  { name: "Text", value: friendData.filter((item) => item.type === "text").length, fill: "#0088FE" },
  { name: "Call", value: friendData.filter((item) => item.type === "call").length, fill: "#00C49F" },
  { name: "Video", value: friendData.filter((item) => item.type === "video").length, fill: "#FFBB28" },

];
  return (
    <div className="container mx-auto px-4 py-8">
           <h1 className="text-[48px]  font-bold mx-2 mb-5 text-[#1F2937]">Friendship Analytics</h1>
     <div className="bg-white shadow-md border border-gray-200 p-10 " >
          <h2 className="text-[24px] font-semibold text-[#1F2937] " >By Interaction Type</h2>
           <div  style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="100%"
              cornerRadius={10}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            >
             <Legend ></Legend>
             <Tooltip></Tooltip>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
     </div>
    </div>
  );
};

export default Stats;
