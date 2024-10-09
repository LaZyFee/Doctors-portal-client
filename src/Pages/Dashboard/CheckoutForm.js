import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const { price, patient, email, _id } = booking;
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false); // Track if submit button should be disabled

    useEffect(() => {
        fetch('https://doctors-portal-server-ten-iota.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            })
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || submitDisabled) { // Check if already processing
            return;
        }
        setSubmitDisabled(true); // Disable submit button to prevent multiple submissions

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        // eslint-disable-next-line no-unused-vars
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
            setSubmitDisabled(false); // Enable submit button
            return;
        }

        setCardError('');
        setProcessing(true);

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            }
        );

        if (intentError) {
            setCardError(intentError.message);
            setSubmitDisabled(false); // Enable submit button
            setProcessing(false);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }

            fetch('https://doctors-portal-server-ten-iota.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! Your payment is completed.');
                        setTransactionId(paymentIntent.id);
                    }
                });
        }

        setProcessing(false);
        setSubmitDisabled(false); // Enable submit button
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: 'white',
                                '::placeholder': {
                                    color: 'white',
                                },
                                border: '1px solid #ced4da',
                                borderRadius: '4px',
                                padding: '10px',
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-4 py-5 text-white my-5' type="submit" disabled={!stripe || !clientSecret || processing || submitDisabled}>
                    {processing ? 'Processing...' : 'Pay'}
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {success && (
                <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transaction Id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
