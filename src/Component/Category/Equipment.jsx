/* eslint-disable react/prop-types */
// Inside the Equipment component
import { useEffect, useState } from "react";
import { fetchData, Exerciseoptions } from "../ApiFetch/ApiStore";

export  const Equipment = ({ equipment }) => {


  const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`;
  const [equipmentData, setEquipmentData] = useState(null); // Use a different name for the state

  useEffect(() => {
    try {
    const fetchEquipment = async () => { 
   
        const AllEquipmentData = await fetchData(url, Exerciseoptions);
        setEquipmentData(AllEquipmentData); 
      }
      fetchEquipment();
    }
      
      catch (error) {
        console.log(error);
      }
    

  
  }, [equipment]);

  

  return (
    <div className="mt-5">
      <h2>Equipment Used: {equipment.name}</h2>
      <div className='container-fluid '>
              <div className='row'>
            {equipmentData &&
          equipmentData.slice(0, 3).map((element, index) => (
            <div key={index} className="col-sm-4">
              <div className="exercise-card">  
              <img src={element.gifUrl} alt={element.name} />
              <h3>{element.name}</h3>
              <p>{element.bodyPart}</p>
              <p>{element.target}</p>
            </div></div>
          ))}
      </div>
    </div>  </div>
  );
};