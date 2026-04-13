"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiAlarmSnoozeLine } from "react-icons/ri";
import { IoArchiveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const FriendsDetails = ({ params }) => {
  const { friendid } = React.use(params);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch("/friends.json");
      const friendsData = await response.json();
      setFriends(friendsData);
    };
    fetchFriends();
  }, []);
  const friend = friends.find((f) => f.id === parseInt(friendid));

  if (!friend) return <div className="p-10 text-center">Friend not found!</div>;

  return (
    <div className="container mx-auto  py-8">
      <div className=" p-4 mx-auto grid lg:grid-cols-3 gap-4">
        {/* div 1 */}
        <div className=" lg:col-span-1 ">
          <div className="border p-8   bg-white border-gray-50  rounded-2xl shadow-md flex flex-col items-center justify-center gap-2   ">
            <div>
              <Image
                width={100}
                height={100}
                className="border border-gray-50 w-full h-full rounded-full transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer"
                src={friend.picture}
                alt={friend.name}
              />
            </div>
            <h2 className="text-[20px] font-semibold text-[#1F2937] ">
              {" "}
              {friend.name}{" "}
            </h2>
            <p className="text-[18px] text-[#64748B]  ">
              {" "}
              {friend.days_since_contact}d ago{" "}
            </p>
            {/* tags list */}
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-[#27523F] text-[14px] font-medium  px-3 py-1 rounded-full border border-green-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p
              className={`text-[16px] font-medium px-4 py-1 rounded-full mt-2 text-white
  ${
    friend.status === "overdue"
      ? "bg-red-500"
      : friend.status === "almost due"
        ? "bg-yellow-500"
        : "bg-green-500"
  }
`}
            >
              {friend.status}
            </p>
            <p>
              <i className="text-[#64748B] text-[16px] "> " {friend.bio} " </i>
            </p>
            <p className="text-[#64748B] text-[14px] "> {friend.email} </p>
          </div>
          <button className="btn bg-white mt-4 flex items-center justify-center rounded-md w-full">
            {" "}
            <RiAlarmSnoozeLine /> Snooze 2 Weeks{" "}
          </button>
          <button className="btn bg-white mt-2 flex items-center justify-center rounded-md w-full">
            {" "}
            <IoArchiveOutline /> Archive{" "}
          </button>
          <button className="btn bg-white mt-2 flex items-center justify-center rounded-md w-full">
            {" "}
            <RiDeleteBin6Line className="text-red-700 " />
            Delete{" "}
          </button>
        </div>
        {/* div 2 */}
        <div className="lg:col-span-2">
          {/* a div  */}
          <div className="   lg:flex justify-around   ">
              <div className="border p-8 mt-4   bg-white border-gray-50  rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 lg:px-12  ">
          <h2 className="text-[32px] font-semibold text-[#1F2937] "> {friend.days_since_contact} </h2>
          <p className="text-[18px] text-[#64748B]  ">Days Since Contact </p>
        </div>
                <div className="border p-8 mt-2   bg-white border-gray-50  rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 lg:px-20 ">
          <h2 className="text-[32px] font-semibold text-[#1F2937] "> {friend.goal} </h2>
          <p className="text-[18px] text-[#64748B]  ">Goal (Days) </p>
        </div>
                <div className="border p-8 mt-2  bg-white border-gray-50  rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2  ">
          <h2 className="text-[32px] font-semibold text-[#1F2937] "> {friend.next_due_date} </h2>
          <p className="text-[18px] text-[#64748B]  ">Next Due </p>
        </div>
          </div>
          {/* b div */}
          <div className="border bg-white border-gray-50 p-5 m-5 rounded-2xl space-y-8 shadow-sm">
               <div className="flex justify-between">
                    <h2 className="text-[20px]   text-[#244D3F] font-bold  "> Relationship Goal </h2>
                    <button className="btn">Edit</button>
               </div> 
               <p className="text-[18px] text-[#64748B] " > Connect every <span className="font-bold text-black"> {friend.goal} days   </span> </p>
          </div>
          {/* c div  */}
          <div></div>

        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
