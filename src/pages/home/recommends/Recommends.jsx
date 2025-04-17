import React, { useEffect, useState } from 'react';
import RecommendsCards from './RecommendsCards';
import SectionTitle from '../../shared/sectionTittle/SectionTittle';

const Recommends = () => {
    const [Recommends, setRecommends] = useState([]);

    useEffect(() => {
        fetch('popularMenuApi.json')
            .then(res => res.json())
            .then(data => {
                const RecommendsItems = data.filter(item => item.category === 'popular');
                setRecommends(RecommendsItems);
            });
    }, []);
    return (
        <div>
<div className="py-16 ">
      {/* Section title */}
      <SectionTitle
        subHeading="Recommends Items"
        heading="Our Recommends"
      />

      {/* Card grid */}
      <section className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {Recommends.map(item => (
            
         <RecommendsCards key={item.id}  item={item}> </RecommendsCards>

        ))}
      </section>
    </div>
        </div>
    );
};

export default Recommends;