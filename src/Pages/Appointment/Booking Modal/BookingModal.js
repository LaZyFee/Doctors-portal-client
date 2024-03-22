import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots, price } = treatment
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            price,
            slot,
            name,
            phone,
            email
        }

        console.log(booking);
        fetch('https://doctors-portal-server-ten-iota.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('booking confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })

    }





    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className="input input-bordered w-full my-2" />
                        <select name='slot' className="select select-bordered select-xs w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full my-2" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full my-2" inputMode='numeric' />
                        <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered w-full my-2" />
                        <input type="submit" name='submit' value="Submit" className="input input-bordered w-full my-2 bg-accent text-white" />
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="bookingModal">Close</label>
            </div>

        </div>
    );
};

export default BookingModal;