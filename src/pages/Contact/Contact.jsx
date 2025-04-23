import React from 'react';
import { useForm } from 'react-hook-form';
import HelmetTittle from '../shared/Helmet/HelmetTittle';
import SectionTitle from '../shared/sectionTittle/SectionTittle';
import Cover from '../shared/cover/Cover';
// import contractImg from '../../assets/home/banner.jpg'
const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);



        reset();
        alert("Message sent successfully!");
    };

    return (
        <div className="pt-10 pb-20 bg-gray-50">
            {/* Meta Title */}
            <HelmetTittle
                tittle="Social | Contact"
                metaName="Contact"
                desContent="Contact with us, order the table"
            />


            {/* <Cover img={contractImg} title={'CONTACT US'} description={' Would you like to CONTACT with us '} ></Cover> */}

            {/* Page Heading */}
            {/* <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">
        CONTACT FORM
      </h1> */}
            <SectionTitle heading={'OUR LOCATION'} subHeading={'---Visit Us---'}></SectionTitle>

            {/* Location Info Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 px-4">
                <div className="bg-white text-center p-6 shadow-lg rounded">
                    <h3 className="text-md font-bold text-yellow-600 mb-2">PHONE</h3>
                    <p className="text-gray-700">+88 01750 00 00 00</p>
                </div>
                <div className="bg-white text-center p-6 shadow-lg rounded">
                    <h3 className="text-md font-bold text-yellow-600 mb-2">ADDRESS</h3>
                    <p className="text-gray-700">Dhanmondi 32, Dhaka, Bangladesh</p>
                </div>
                <div className="bg-white text-center p-6 shadow-lg rounded">
                    <h3 className="text-md font-bold text-yellow-600 mb-2">WORKING HOURS</h3>
                    <p className="text-gray-700">Mon - Fri: 10:00 am - 10:00 pm</p>
                    <p className="text-gray-700">Sat - Sun: 12:00 pm - 11:00 pm</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded p-8 border">
                <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">
                    CONTACT FORM
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Name*</label>
                            <input
                                {...register('name', { required: true })}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Email*</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block font-medium mb-1">Phone*</label>
                        <input
                            {...register('phone', { required: true })}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-medium mb-1">Message*</label>
                        <textarea
                            {...register('message', { required: true })}
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-yellow-600 text-white font-semibold py-2 px-6 rounded hover:bg-yellow-700 transition duration-300"
                        >
                            Send Message ✉️
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
