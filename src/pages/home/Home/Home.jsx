import React from 'react';
import TopBanner from '../headerBanarPage/TopBanner';
import CategoryList from '../categoryList/CategoryList';
import OfferPage from '../offerPage/OfferPage';
import PopularCard from '../PopularPage/PopularCard';
import Recommends from '../recommends/Recommends';
import Featured from '../featured/Featured';
import Testimonials from '../testimonials/testimonials';
import Team from '../team/Team';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <CategoryList></CategoryList>

            <PopularCard></PopularCard>
            <OfferPage></OfferPage>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Team></Team>
        </div>
    );
};

export default Home;