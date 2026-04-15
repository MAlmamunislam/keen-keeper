import React from "react";

const HomePageSecondSection = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-2 ">
        <div className="border p-8  bg-white border-gray-200   rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow hover:border-gray-200">
          <h2 className="text-[32px] font-semibold text-[#1F2937] ">16</h2>
          <p className="text-[18px] text-[#64748B]  ">Total Friends</p>
        </div>
        <div className="border p-8  bg-white border-gray-200   rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow hover:border-gray-200 ">
          <h2 className="text-[32px] font-semibold text-[#1F2937] ">7</h2>
          <p className="text-[18px] text-[#64748B]  ">On Track </p>
        </div>
        <div className="border p-8  bg-white border-gray-200  rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow hover:border-gray-200">
          <h2 className="text-[32px] font-semibold text-[#1F2937] ">5</h2>
          <p className="text-[18px] text-[#64748B]  ">Need Attention </p>
        </div>
        <div className="border p-8  bg-white border-gray-200  rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow hover:border-gray-200">
          <h2 className="text-[32px] font-semibold text-[#1F2937] ">4</h2>
          <p className="text-[18px] text-[#64748B]  ">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageSecondSection;
