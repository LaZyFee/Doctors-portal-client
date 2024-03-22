import React from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/assets/images/bg.png)' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/assets/images/chair.png" className=" md:w-1/2 rounded-lg shadow-2xl" alt='chair' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;