import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Contact = () => {
    return (
        <section className='mt-28'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='text-center p-8 md:p-28'>
                <div className='mb-10'>
                    <h3 className='text-xl text-secondary font-bold'>Contact Us</h3>
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
                <div className='mx-5 md:mx-auto'>
                    <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs my-2" /> <br />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs my-2" /> <br />
                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-4" ></textarea>
                    <PrimaryButton> Submit </PrimaryButton>
                </div>
            </div>

        </section>
    );
};

export default Contact;