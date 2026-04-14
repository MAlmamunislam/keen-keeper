"use client";
import React, { useContext } from "react";
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
     if (type === "Text") {
       return <IoMdText className="text-green-400 text-2xl" />;
     }
     if (type === "Video") {
       return <FaVideo className="text-blue-400 text-2xl" />;
     }
  }

  return (
    <div className="container mx-auto py-8">
      {friendData.length === 0 ? (
        <p>Please insert the friend data</p>
      ) : (
        <div>
          {" "}
          <h1 className="text-3xl font-bold mx-2 mb-2">Timeline</h1>
          {/* filter  */}
          <div className="dropdown mx-2 dropdown-hover hover:mb-20">
            <div tabIndex={0} role="button" className="btn m-1">
              Hover
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          {/* timeline  */}
        <div>
          {
               friendData.map((item , index) => (
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
