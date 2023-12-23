// src/components/CustomerList.js
import React from 'react';

const CustomerList = ({ customers, onDelete }) => {
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>
          {customer.name} - {customer.customerNumber}
          <button onClick={() => onDelete(customer.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
