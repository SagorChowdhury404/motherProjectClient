import React from 'react';
import SectionTitle from '../../shared/sectionTittle/SectionTittle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div>
            <div className="featured-item bg-fixed text-white pt-8 my-20">
                <div className='bg-slate-200 bg-opacity-25 mx-auto md:w-2/4 py-5'>
                    <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>

                </div>
                <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;