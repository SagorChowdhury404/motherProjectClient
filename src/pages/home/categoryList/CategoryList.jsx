import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay'; // optional but clean to import

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import category1 from '../../../assets/menu/soup-bg.jpg';
import category2 from '../../../assets/menu/salad-bg.jpg';
import category3 from '../../../assets/menu/pizza-bg.jpg';
import category4 from '../../../assets/menu/dessert-bg.jpeg';
import SectionTittle from '../../shared/sectionTittle/SectionTittle';

const CategoryList = () => {
  return (
    <section>
      <SectionTittle 
      heading={'Order Now'}
      subHeading={'FROM 11,00am to'}
      
      
      >
      </SectionTittle>

      <div className="w-full max-w-6xl mx-auto py-8">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={16}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2000, // 2 seconds per slide
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
              <img
                src={category1}
                alt="Soup"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase text-center -mt-28 text-blue-700 font-bold">
              Soup
            </h3>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
              <img
                src={category2}
                alt="Salad"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase text-center -mt-28 text-blue-700 font-bold">
              Salad
            </h3>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
              <img
                src={category3}
                alt="Pizza"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase text-center -mt-28 text-blue-700 font-bold">
              Pizza
            </h3>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
              <img
                src={category4}
                alt="Dessert"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase text-center -mt-28 text-blue-700 font-bold">
              Dessert
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CategoryList;
