import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import AvailableServiceCard from './AvailableServiceCard';
import Footer from '../../Home/Footer';
import BookingModal from '../Booking Modal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader';


const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const { data: appointments = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctors-portal-server-ten-iota.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <section>
            <h3 className='text-center text-3xl font-bold text-secondary mt-16'>Availabe Services on {format(selectedDate, 'PP')}</h3>
            <p className='text-center text-accent'>please select a service</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-10 my-10'>
                {
                    appointments.map(appointment => <AvailableServiceCard
                        key={appointment._id}
                        appointment={appointment}
                    />
                    )
                }
            </div>
            <h3 className='text-center text-3xl font-bold text-secondary my-16'>Available slots for Teeth Orthodontics</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-10 my-20'>
                {
                    appointments.map(appointment => <AppointmentCard
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    />
                    )
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    refetch={refetch}
                />
            }
            <Footer />
        </section>
    );
};

export default AvailableAppointment;