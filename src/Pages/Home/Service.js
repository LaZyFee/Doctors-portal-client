import React from 'react';
import Services from './Services';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Service = () => {
    const serviceItem = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: whitening
        }
    ]
    return (
        <div className='mt-4 md:mt-32'>
            <div className='text-center'>
                <h3 className='text-xl text-primary font-bold'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 md:mx-10'>
                {
                    serviceItem.map(item => <Services key={item.id} item={item} />)

                }
            </div>
            <div className="hero min-h-screen mt-8 md:mt-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className=" md:max-w-sm rounded-lg shadow-2xl md:ml-20" alt='' />
                    <div className='md:p-36'>
                        <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;