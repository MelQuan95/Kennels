import React from "react"
import "./location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location, employeeCount, animalCount }) => (
    <section className="location">
        <h3 className="location_name"><Link to={`/locations/detail/${location.id}`}>
            {location.name}
        </Link>
        </h3>
        <p className="location_employeeCount">{employeeCount} Employees </p>
        <p className="location_animalCount">{animalCount} Aniamls </p>

    </section>



)