"use client";
import React, { useContext, useState } from "react";
import { MyContext } from "../layout";
import { FaVideo } from "react-icons/fa6";
import { IoMdText } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";


const TimeLine = () => {
    
     

  const { friendData } = useContext(MyContext);
  const icon = (type) => {
     if (type === "call") {
       return <IoCallSharp className="text-red-400 text-2xl" />;
     }
     if (type === "text") {
       return <IoMdText className="text-green-400 text-2xl" />;
     }
     if (type === "video") {
       return <FaVideo className="text-blue-400 text-2xl" />;
     }
  }
   const [filter, setFilter] = useState("all");
   const filterData = friendData.filter((item) => {
     if(filter === "all")  return true;
     return item.type === filter;
   } )

  return (
    <div className="container mx-auto py-8">
      {friendData.length === 0 ? (
        <p className=  " text-2xl md:text-[40px] font-bold text-red-600 text-center my-50 bg-amber-100 p-15 md:p-30 mx-10 rounded-3xl">No activity to display</p>
      ) : (
        <div>
          {" "}
          <h1 className="text-3xl font-bold mx-2 mb-2">Timeline</h1>
          {/* filter  */}
         <div className="dropdown dropdown-bottom  focus-within:mb-40 transition-all duration-300">
             <div  tabIndex={0} role="button" className="btn w-40 m-2 bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300 ">
              Filter: {filter}
            </div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a onClick={() => setFilter("all")}>All Activity</a></li>
              <li><a onClick={() => setFilter("call")}>Calls Only</a></li>
              <li><a onClick={() => setFilter("text")}>Texts Only</a></li>
              <li><a onClick={() => setFilter("video")}>Videos Only</a></li>
            </ul>
          </div>
          {/* timeline  */}
        <div>
          {
               filterData.map((item , index) => (
                      <div key={index} className="bg-gray-50 items-center border p-5 mx-2 rounded-md mt-5 border-gray-200 flex gap-5 " >
              <div> { icon(item.type) } </div>
              <div>
               <p> <span className="text-[20px] text-[#244D3F]  "> {item.type}  </span> with {item.name} </p>
               <p className="text-[14px] text-gray-500"> {item.time} </p>
              </div>

          </div>
               ))
          }
        </div>
        </div>
      )}
    </div>
  );
};

export default TimeLine;
