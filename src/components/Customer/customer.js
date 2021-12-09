import React from "react";
import "./customer.css";


export const CustomerCard = ({ customer }) => (
    <section className="customer">
    <h3 className="customer_name">{customer.name}</h3>
    <div className="customer_location"> {customer.address}</div>
</section>

)