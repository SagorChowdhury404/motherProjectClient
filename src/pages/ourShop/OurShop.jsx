import React from 'react';
import HelmetTittle from '../shared/Helmet/HelmetTittle';
import Cover from '../shared/cover/Cover';
import bannerIMG from '../../assets/shop/banner2.jpg'
const OurShop = () => {
    return (
        <div>
            <section>
                <HelmetTittle
                    tittle="Social|OurShop = () => 
                        {"metaName="description"
                    desContent="Oder the delicious food form OurShop." />

            </section>
            <section>
                <Cover img={bannerIMG} title={'Explore our shop'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi provident tenetur libero asperiores sed sequi ipsam iure quos error.'} ></Cover>
            </section>
            <h1>OurShop</h1>
        </div>
    );
};

export default OurShop;