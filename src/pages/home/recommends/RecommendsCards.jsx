import React from 'react';

const RecommendsCards = ({item}) => {
    return (
      <div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-5 flex flex-col space-y-3">
          <h2 className="text-xl font-bold text-blue-700">{item.name}</h2>
          <p className="text-gray-600 text-sm">{item.recipe}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-green-600">${item.price}</p>
            <button
              type="button"
              className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default RecommendsCards;