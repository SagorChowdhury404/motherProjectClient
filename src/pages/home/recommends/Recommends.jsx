// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/sectionTittle/SectionTittle';
// import UseMenu from '../../../hooks/useMenu/UseMenu';
import MapItems from '../../shared/mapingItems/MapItems';
import UseMenu from '../../../hooks/useMenu/UseMenu';

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
    
        <section>
          <MapItems items={RecommendsData} ></MapItems>
        </section>
      </div>
    </div>
  );
};

export default Recommends;