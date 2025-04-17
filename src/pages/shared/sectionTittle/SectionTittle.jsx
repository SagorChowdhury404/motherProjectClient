import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-6 space-y-2">
      {subHeading && (
        <p className=" text-gray-500 uppercase tracking-wider font-semibold text-2xl">
          --- {subHeading} ---
          <div className="w-60 mx-auto border-b-4 border-black mt-3 "></div>
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 uppercase tracking-wide drop-shadow-lg ">
        {heading}
      </h2>
      <div className="w-24 mx-auto border-b-4 border-black mt-3 "></div>
    </div>
  );
};

export default SectionTitle;
