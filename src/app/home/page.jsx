"use client";
import HomePageFastDesing from "@/Component/HomePageFastDesing";
import HomePageSecondSection from "@/Component/HomePageSecondSection";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch("/friends.json");
      const friendsData = await response.json();
      setFriends(friendsData);
    };
    fetchFriends();
  }, []);

  //   console.log(friends);

  return (
    <div className="container mx-auto  py-8">
      <div>
        <HomePageFastDesing></HomePageFastDesing>
      </div>
      {/* second section  */}
      <div className=" pb-10 mb-8 border-b-2 border-b-gray-200">
        <HomePageSecondSection></HomePageSecondSection>
      </div>
      {/* main part  */}
      <div>
        <h2 className="text-[24px] font-semibold mb-5  "> Your Friends </h2>
        {/* friend list */}
        <div className=" px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <Link href={`/home/${friend.id}`}
              key={friend.id}
              className="border p-8 cursor-pointer  bg-white border-gray-50  rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:transition-shadow hover:border-gray-200 hover:bg-gray-50 "
            >
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
