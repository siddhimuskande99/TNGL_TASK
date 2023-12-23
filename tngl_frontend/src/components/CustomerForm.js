// src/components/CustomerForm.js
import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {
  const [customer, setCustomer] = useState({ name: '', address: '', customerNumber: '', meterSerialNumber: '' });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer);
    setCustomer({ name: '', address: '', customerNumber: '', meterSerialNumber: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={customer.name} onChange={handleChange} required />

      <label>Address:</label>
      <textarea name="address" value={customer.address} onChange={handleChange} required />

      <label>Customer Number:</label>
      <input type="text" name="customerNumber" value={customer.customerNumber} onChange={handleChange} required />

      <label>Meter Serial Number:</label>
      <input type="text" name="meterSerialNumber" value={customer.meterSerialNumber} onChange={handleChange} required />

      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
