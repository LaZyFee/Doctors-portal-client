import React from 'react';

const Services = ({ item }) => {
    const { title, description, icon } = item
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Services;