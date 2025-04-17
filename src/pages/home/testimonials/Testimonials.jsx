import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/sectionTittle/SectionTittle';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);

  return (
    <div className='bg-white py-10'>
      <section>
        <SectionTitle
          subHeading="What our customers are saying about us"
          heading={'Testimonials'}
        />
      </section>

      <section className="max-w-3xl mx-auto my-10">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
        >
          {
            reviews.map(review => (
              <div key={review._id} className="text-center p-6">
                <img
                  src="https://source.unsplash.com/100x100/?person"
                  alt={review.name}
                  className="mx-auto rounded-full w-24 h-24 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <p className="text-gray-600 italic mb-4">"{review.details}"</p>
                
                <div className="flex justify-center mb-2">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>

                <p className="text-yellow-500 text-lg">Rating: {review.rating}/5</p>
              </div>
            ))
          }
        </Carousel>
      </section>
    </div>
  );
};

export default Testimonials;
