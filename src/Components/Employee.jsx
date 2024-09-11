import PetList from "./PetList";
import "./Employee.css";
import { useState,useEffect } from "react";

export const Employee = ({employee}) => {
  const API = "https://vet-app-0obi.onrender.com/api"
  const [togglePet, setTogglePet] = useState(false)
  const [ pets, setPets ] = useState([])

  const showPets = ()=>{
    setTogglePet(!togglePet)
  }

  useEffect(()=>{
    showPets()
  },[])
 
  
  function getPets(){
    fetch(`${API}/pets`)
    .then((response)=> response.json())
    .then((petsData)=>{
      // console.log(data)
      setPets(petsData)
    })
    .catch((error) =>{
      console.log(error, "Error getting pets!")
    })
  }

  useEffect(()=>{
    getPets()
  },[])

  console.log("initial pets:",pets)


  const {id, firstName, lastName, prefix, postfix, title} = employee

  console.log("Employee: ==> ", employee)
  return (
    <article className="employee">
      <h3>{prefix ? prefix : ""} {firstName} {lastName} {postfix ? postfix : ""}</h3>
      <h4>{title}</h4>
      <button onClick={showPets}>Show Pets</button>
      {pets.map((pet)=>{
        if(pet.employeeId===id){

          return (
            togglePet ? (
              <>
                <PetList key={pet.id} pet={pet}/>
              </>

            )
            :
            ("")
          )
        }

      })}
    </article>
  );
};

export default Employee;