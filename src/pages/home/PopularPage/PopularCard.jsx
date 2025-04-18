// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/sectionTittle/SectionTittle';
import PopularItem from '../../shared/PopularItems/PopularItem';
import UseMenu from '../../../hooks/useMenu/UseMenu';

const PopularCard = () => {
    const [data] = UseMenu();
    const popular = data.filter(item => item.category === 'popular');


    return (
        <div className="py-16 bg-white">
            {/* Section title */}
            <SectionTitle
                subHeading="Popular Items"
                heading="From Our Menu" />

            {/* Card grid */}
            
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <PopularItem
                        key={item._id}
                        item={item}
                    ></PopularItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularCard;
