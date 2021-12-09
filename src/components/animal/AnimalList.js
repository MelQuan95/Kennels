import React, { useState, useContext, useEffect} from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router-dom"


export const AnimalList = () => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)

    const  [ filteredAnimals, setFiltered] = useState([])

    const navigate = useNavigate()
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
          // If the search field is not blank, display matching animals
          const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
          setFiltered(subset)
        } else {
          // If the search field is blank, display all animals
          setFiltered(animals)
        }
      }, [searchTerms, animals])
    

    

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <AnimalCard key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}



// import {React,  useContext, useEffect } from "react"
// import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../Locations/LocationProvider"
// import { CustomerContext } from "../Customer/CustomerProvider"
// import "./Animal.css"
// import { AnimalCard } from "./AnimalCard"
// import { useNavigate } from 'react-router-dom';


// export const AnimalList = () => {
//     const { animals, getAnimals } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)

//     useEffect(() => {
//         console.log("AnimalList: Initial render before data")
//         getLocations()
//         .then(getCustomers)
//         .then(getAnimals)
//     }, [])

//     const navigate = useNavigate()

//         return (
//             <>
//                 <h2>Animals</h2>
//                 <button onClick={() => {navigate("create")}}>
//                     Add Animal
//                 </button>
//                 <div className="animals">
//                 {
//                 <div className="animals">
//             {animals.map(animal => {
//     const owner = customers.find(c => c.id === animal.customerId)
//     const clinic = locations.find(l => l.id === animal.locationId)

//     return <AnimalCard key={animal.id}
//                 location={clinic}
//                 customer={owner}
//                 animal={animal} />
// })
// }
//     </div>
//         }
//         </div>
//             </>
//         )
        
    
        
    
// }

