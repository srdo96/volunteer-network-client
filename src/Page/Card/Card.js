import React from "react";

const Card = ({ card }) => {
  const { img, title } = card;
  console.log(card);

  const color = ["bg-blue-900", "bg-teal-600", "bg-amber-500", " bg-red-500"];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  return (
    <div className="w-72 max-w-sm  shadow-inner">
      <div className="relative ">
        <img className="rounded shadow-xl" src={img} alt="" />
        {/* bg-blue-900 bg-teal-600 bg-amber-500 bg-red-500 */}
        <div
          className={`absolute bottom-0 py-5 text-4xl ${randomColor} rounded-b-md  w-full text-white font-normal`}
        >
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
