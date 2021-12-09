import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./location"
import "./location.css"
import { useNavigate } from "react-router"
import { EmployeeContext } from "../Employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"





export const LocationList = () => {
  // This state changes when `getlocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const { employees, getEmployees} = useContext(EmployeeContext)
  const { animals, getAnimals} = useContext(AnimalContext)



  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
    .then(getEmployees)
    .then(getAnimals)

  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => { navigate("create") }}>
        Add Location
      </button>
      <div className="locations">
        {console.log("LocationList: Render", locations)}

        {locations.map(location => {

          const employeeByLocation = location.employees?.filter(e => e.locationId === location.id)
          const animalByLocation = location.animal?.filter(a => a.locationId === location.id)

          const employleeCount = employeeByLocation?.length
          const animalCount = animalByLocation?.length

          return <LocationCard key={location.id}
            location={location}
            employleeCount={employleeCount}
            animalCount={animalCount}
          />
        })
        }
      </div>

  
</>
)}