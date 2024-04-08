import React from "react";

function Card(props) {
  const { title, desc } = props;
  return (
    <div className=" border hover:shadow-lg  px-3  border-gray-300 rounded-md bg-white py-8 lg:w-[50%] sm:w-[80%] flex-col  gap-x-2 gap-y-2 lg:flex-row items-center flex  ">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Hx-SMOWVFuEV5i_zQCEUHlXLtjGu60R36Q&s"
        alt="image"
        width={"200"}
        className=" "
      />
      <div className=" w-[80%] flex flex-col justify-start items-start">
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{desc}</p>
        <button className=" text-blue-600 font-semibold  rounded-md ">
          Watch Videos
        </button>
      </div>
    </div>
  );
}

export default Card;
