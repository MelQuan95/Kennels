import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./employee"
import "./employee.css"
import { LocationContext } from "../Locations/LocationProvider"
import { useNavigate } from "react-router"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)


  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getLocations()
      .then(getEmployees)

  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => { navigate("create") }}>
        Add Employee
      </button>
      <div className="employees">
        {
          <div className="employees">
            {employees.map(employee => {

              const clinic = locations.find(l => l.id === employee.locationId)

              return <EmployeeCard key={employee.id}
                location={clinic}
                employee={employee}
                
              />
            })
            }
          </div>
        }
      </div>
    </>
  )
      }