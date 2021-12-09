import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./Employee/EmployeeList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { LocationProvider } from "./Locations/LocationProvider"
import { LocationList } from "./Locations/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./Employee/EmployeeForm"
import { LocationForm } from "./Locations/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetails"
import { EmployeeDetail } from "./Employee/EmployeeDetail"
import { LocationDetail } from "./Locations/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"


export const ApplicationViews = () => {
    return (
        <EmployeeProvider>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            
                            <Route path="animals/create/*" element={<AnimalForm />} />
                            <Route path="employees/create/*" element={<EmployeeForm />} />
                            <Route path="employees/*" element={<EmployeeList />} />
                            <Route path="locations/create/*" element={<LocationForm />} />
                            <Route path="locations/*" element={<LocationList />} />

                            <Route path="animals/detail/:animalId/*" element={<AnimalDetail />} />
                            <Route path="employees/detail/:employeeId/*" element={<EmployeeDetail />} />
                            <Route path="locations/detail/:locationId/*" element={<LocationDetail />} />
                            <Route path="animals/edit/:animalId/*" element={<AnimalForm />} />
                            <Route path="employees/edit/:employeeId/*" element={<EmployeeForm />} />
                            <Route path="locations/edit/:locationId/*" element={<LocationForm />} />
                            <Route path="animals/*" element={<><AnimalSearch /><AnimalList /></>} />



                            <Route path="customers/*" element={<CustomerList />} />
                        </Routes>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </EmployeeProvider>

    )
}

