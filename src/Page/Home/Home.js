import React from "react";

const Home = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold uppercase">
        I grow by helping people in need.
      </h1>
      <div className="md:max-w-full lg:col-span-2  flex justify-center mt-6">
        <form className="flex flex-col mt-4 md:flex-row ">
          <input
            placeholder="Search..."
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-blue-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
