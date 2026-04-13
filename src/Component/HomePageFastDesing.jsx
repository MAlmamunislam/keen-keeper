import React from "react";

const HomePageFastDesing = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center  p-6 md:p-12 gap-4">
        <h1 className=" text-[23px] md:text-[48px] mb-1 font-bold text-[#1F2937]">Friends to keep close in your life </h1>
        <p className=" text-[14px] md:text-[16px] font-normal text-[#1F2937] ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className=" bg-[#244D3F] mt-2 w-fit flex justify-center items-center text-white py-2 px-4 rounded-md hover:bg-[#1a3b2d]">
          Add a Friend
        </button>
      </div>
    </div>
  );
};

export default HomePageFastDesing;
