import React from 'react';
import BuyCard from '../buyCard/buyCard';

const MapItems = ({ items }) => {
    return (
        <div>
            <section className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">

                {
                    items.map(item => <BuyCard key={item.id} item={item}></BuyCard>)
                };

            </section>
        </div>
    );
};

export default MapItems;