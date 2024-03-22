import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loader from '../Shared/Loader';




const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const navigation = useNavigation();
    const booking = useLoaderData();

    if (navigation.state === "loading") {
        return <Loader />
    }

    return (
        <div className='w-3/4 mx-auto my-12'>
            <h1 className="text-3xl font-bold text-primary">Payment for {booking.treatment}</h1>
            <p className="text-xl my-4">Please pay <strong className='text-green-500'>${booking.price}</strong> for your appointment on <strong>{booking.appointmentDate}</strong> at <strong className='text-orange-500'>{booking.slot}</strong></p>

            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;