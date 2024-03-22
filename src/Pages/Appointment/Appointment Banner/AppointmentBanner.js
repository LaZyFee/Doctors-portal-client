import React from 'react';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section className='my-10'
            style={{
                background: `url(/assets/images/bg.png)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/assets/images/chair.png" className=" md:w-1/2 rounded-lg shadow-2xl" alt='chair' />

                    <div className='shadow-xl rounded-md sm:mx-8 '>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;