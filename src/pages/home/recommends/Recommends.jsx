// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/sectionTittle/SectionTittle';
import UseMenu from '../../../hooks/useMenu/UseMenu';
import BuyCard from '../../shared/buyCard/buyCard';
import MapItems from '../../shared/mapingItems/MapItems';

const Recommends = () => {
  const [Recommends] = UseMenu()
  const RecommendsData = Recommends.filter(item => item.category === 'popular');
  return (
    <div>
      <div className="py-16 ">
        {/* Section title */}
        <SectionTitle
          subHeading="Recommends Items"
          heading="Our Recommends"
        />

        {/* Card grid */}
        {/* <section className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">

          {RecommendsData.map(item => (
            <BuyCard

              key={item.id}
              item={item}>

            </BuyCard>))};

        </section> */}
        <section>
          <MapItems items={RecommendsData} ></MapItems>
        </section>
      </div>
    </div>
  );
};

export default Recommends;