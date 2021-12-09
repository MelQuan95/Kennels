import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { LocationCard } from "./Locations/location"
// import { EmployeeCard } from "./Employee/employee"
// import { CustomerCard } from "./Customer/customer"
import { PropsAndState } from "./PropsAndState"
import "./Kennel.css"


export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName={"MelQuan"}/>
    </>
    )
