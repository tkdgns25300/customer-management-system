import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const Customer = ({ id, image, name, birthday, gender, job }) => {
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} /></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birthday}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
        </TableRow>
    )
}

// const CustomerProfile = ({id, image, name}) => {
//     return (
//         <div>
//             <img src={image} alt="profile" />
//             <h2>{name}({id})</h2>
//         </div>
//     )
// }

// const CustomerInfo = ({ birthday, gender, job}) => {
//     return (
//         <div>
//             <p>{birthday}</p>
//             <p>{gender}</p>
//             <p>{job}</p>
//         </div>
//     )
// }

export default Customer;