import React, { useState } from 'react';
import AppointmentBanner from '../Appointment Banner/AppointmentBanner';
import AvailableAppointments from '../Available Appointment/AvailableAppointment';
const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>



        </div>
    );
};

export default Appointment;