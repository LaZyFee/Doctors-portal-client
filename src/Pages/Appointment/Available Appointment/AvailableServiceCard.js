import React from 'react';

const AvailableServiceCard = ({ appointment }) => {
    const { name } = appointment
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary">{name}</h2>
            </div>

        </div>
    );
};

export default AvailableServiceCard;