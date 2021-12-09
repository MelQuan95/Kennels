import React from "react";
import "./employee.css"
import { Link } from "react-router-dom";

export const EmployeeCard = ({ employee, location }) => (
    <section className="employee">
    <h3 className="employee_name">
        <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
          </h3>
    {/* <div className="employee__location">{ location.name }</div> */}
</section>

)

