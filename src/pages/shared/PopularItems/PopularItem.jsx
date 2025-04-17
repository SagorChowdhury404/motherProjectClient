import React from 'react';

const PopularItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4 items-center p-4 rounded-lg transition duration-300 hover:shadow-xl">
        <img
          style={{ borderRadius: '0 200px 200px 200px' }}
          className="w-[100px] object-cover"
          src={image}
          alt=""
        />
        <div className="flex-1">
          <h3 className="uppercase font-semibold text-lg">{name} ---------</h3>
          <p className="text-gray-600">{recipe}</p>
        </div>
        <p className="text-yellow-500 font-bold">${price}</p>
      </div>
      
    );
};

export default PopularItem;