import React from 'react';

const AppointmentCard = ({ appointment, setTreatment }) => {
    const { name, slots, price } = appointment
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center mt-10">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="bookingModal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appointment)}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>

        </div>
    );
};

export default AppointmentCard;