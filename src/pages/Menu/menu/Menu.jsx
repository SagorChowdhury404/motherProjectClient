import React from 'react';
import { Helmet } from 'react-helmet-async';
import HelmetTittle from '../../shared/Helmet/HelmetTittle';
import Cover from '../../shared/cover/Cover';
import UseMenu from '../../../hooks/useMenu/UseMenu';
import PopularItem from '../../shared/PopularItems/PopularItem';

// img section 
import banner from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import ViewFullMenu from '../../shared/viewFullMenu/ViewFullMenu';


const Menu = () => {
    const [data] = UseMenu();
    const offered = data.filter(item => item.category === 'offered');
    const dessert = data.filter(item => item.category === 'dessert');
    const soup = data.filter(item => item.category === 'soup');
    const pizza = data.filter(item => item.category === 'pizza');
    const salad = data.filter(item => item.category === 'salad');
    return (
        <div>

            {/* meta tag for seo and tittle  */}
            <section>
                <HelmetTittle
                    tittle="Social | Menu"
                    metaName="description"
                    desContent="Explore our latest delicious menu items."
                />
            </section>

            {/* offered section  */}
            <section>
                <Cover img={banner} title={'Explore our latest delicious menu items'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi provident tenetur libero asperiores sed sequi ipsam iure quos error.'} ></Cover>

                <div className="grid md:grid-cols-2 gap-10 my-10">
                    {
                        offered.map(item => <PopularItem
                            key={item._id}
                            item={item}
                        ></PopularItem>)
                    }
                </div>
                < ViewFullMenu></ViewFullMenu>
            </section>

            {/* dessert section  */}
            <section>
                <Cover img={dessertImg} title={'Explore our latest delicious menu dessert'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi provident tenetur libero asperiores sed sequi ipsam iure quos error.'} ></Cover>

                <div className="grid md:grid-cols-2 gap-10 my-10">
                    {
                        dessert.map(item => <PopularItem
                            key={item._id}
                            item={item}
                        ></PopularItem>)
                    }
                </div>
                < ViewFullMenu></ViewFullMenu>
            </section>

            {/* soup section  */}
            <section>
                <Cover img={soupImg} title={'Explore our latest delicious menu soup'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi provident tenetur libero asperiores sed sequi ipsam iure quos error.'} ></Cover>

                <div className="grid md:grid-cols-2 gap-10 my-10">
                    {
                        soup.map(item => <PopularItem
                            key={item._id}
                            item={item}
                        ></PopularItem>)
                    }
                </div>
                < ViewFullMenu></ViewFullMenu>
            </section>

            {/* pizza section  */}
            <section>
                <Cover img={pizzaImg} title={'Explore our latest delicious menu pizza'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi provident tenetur libero asperiores sed sequi ipsam iure quos error.'} ></Cover>

                <div className="grid md:grid-cols-2 gap-10 my-10">
                    {
                        pizza.map(item => <PopularItem
                            key={item._id}
                            item={item}
                        ></PopularItem>)
                    }
                </div>
                < ViewFullMenu></ViewFullMenu>
            </section>

            {/* salad section  */}
            <section>
                <Cover img={saladImg} title={'Explore our latest delicious menu items'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi provident tenetur libero asperiores sed sequi ipsam iure quos error.'} ></Cover>

                <div className="grid md:grid-cols-2 gap-10 my-10">
                    {
                        salad.map(item => <PopularItem
                            key={item._id}
                            item={item}
                        ></PopularItem>)
                    }
                </div>
                <ViewFullMenu></ViewFullMenu>
            </section>


        </div>
    );
};

export default Menu;