import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import UseAxiosSecure from '../../../hooks/useAxiosSecure/UseAxiosSecure';
import UseCart from '../../../hooks/useCart/UseCart';
import useAuth from '../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = () => {
    const { user } = useAuth('');
    const navigate = useNavigate();

    // Personal information states
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('US'); // Default to 'US'
    const [postalCode, setPostalCode] = useState('');
    const [transactionId, setTransactionId] = useState('');



    const [clientSecret, setClientSecret] = useState('');

    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();

    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }


    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                name: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL,
                phone,
                address: { country, postal_code: postalCode },
            },
        });

        if (error) {
            console.error(error);
            setError(error.error)

        } else {
            console.log('PaymentMethod:', paymentMethod);
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName,
                    email: user.email,
                    phone,
                    address: {
                        country,
                        postal_code: postalCode,
                    }
                }
            }


        })
        if (confirmError) {
            console.error(error);


        } else {
            console.log('paymentIntent:', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('paymentIntent', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save to the payment in the db 
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    // date: new Date (), //use data convert .use moment js to
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending",
                }


                const res = await axiosSecure.post('/payments', payment);
                console.log("payment saves", res.data);

                await refetch();
                if (res?.data?.paymentsResult?.insertedId) {
                    Swal.fire({
                        title: "Payment Successful!",
                        text: `Transaction ID: ${paymentIntent.id}`,
                        icon: "success"
                    });
                    // Reset input fields
                    setPhone('');
                    setPostalCode('');
                    setCountry('US');

                    // Clear card element
                    const cardElement = elements.getElement(CardElement);
                    cardElement.clear();

                    // Correctly navigate
                    navigate('/dashboard/paymentHistory');
                }


            }
        }


    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <section className="space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">


                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        defaultValue={user.displayName}
                        required
                        placeholder="Jane Doe"
                        className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Email Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        defaultValue={user.email}
                        required
                        placeholder="jane@example.com"
                        className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        What's app Number
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>


                {/* Country & ZIP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Country
                        </label>
                        <input
                            value={country}
                            defaultValue={'us'}
                            onChange={e => setCountry(e.target.value)}
                            className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            ZIP / Postal Code
                        </label>
                        <input
                            type="text"
                            value={postalCode}
                            onChange={e => setPostalCode(e.target.value)}
                            required
                            placeholder="90210"
                            className="w-full bg-white px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </section>

            {/* Card Information Section */}
            <div className="p-4 border border-gray-300 rounded-md">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </div>

            {/* Submit Button */}
            <button

                type="submit"
                disabled={!stripe || !clientSecret}

                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"

            >
                Pay Now
            </button>
            <p>{error}</p>

            {
                transactionId && <p className='text-green-500 '> Your transaction Id {transactionId}  </p>
            }

        </form>
    );
};

export default CheckoutForm;
