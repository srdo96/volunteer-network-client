import React from "react";
import link from "../../img/link.png";
import text from "../../img/text.png";

const Add = () => {
  return (
    <div className="w-96 mx-auto mt-12 shadow-xl p-12">
      <h1 className="text-4xl font-medium mb-8">Add activity</h1>
      <form>
        <div className="flex flex-col mb-2">
          <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <img src={text} alt="" />
            </span>
            <input
              type="text"
              id="sign-in-email"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Title"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <img src={link} alt="" />
            </span>
            <input
              type="password"
              id="sign-in-email"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Image Link"
              required
            />
          </div>
        </div>

        <div className="flex w-full">
          <button
            type="submit"
            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Add to Database
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
