import React from 'react';

const Customer = ({ name, birthday, gender, job }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    )
}
export default Customer;