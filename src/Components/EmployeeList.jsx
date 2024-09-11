import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect} from "react";

export const EmployeeList = () => {
  
  const [ employees, setEmployees ] = useState([])
  
  const API = "https://vet-app-0obi.onrender.com/api"

  function getEmployees(){
    fetch(`${API}/employees`)
    .then((response)=> response.json())
    .then((data)=>{
      // console.log(data)
      setEmployees(data)
    })
    .catch((error) =>{
      console.log(error, "Error getting employees!")
    })
  }
  
  useEffect(()=>{
    getEmployees()
  },[])

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employees.map(emp => {
    
        return <Employee key={emp.id} employee = {emp}/>
    
      })}
      </section>
    </main>
  );

};

export default EmployeeList;