/* eslint-disable react/prop-types */
// Inside the Equipment component
import { useEffect, useState } from "react";
import { fetchData, Exerciseoptions } from "../ApiFetch/ApiStore";

// eslint-disable-next-line react/prop-types
export  const Equipment = ({ equipment }) => {

// console.log(equipment+"This is equipment bro ")



  const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`;
  const [equipmentData, setEquipmentData] = useState(null); // Use a different name for the state

  useEffect(() => {
    try {
    const fetchEquipment = async () => { // Rename the async function
   
        const AllEquipmentData = await fetchData(url, Exerciseoptions);
        setEquipmentData(AllEquipmentData); // Update the state using setEquipmentData
      }
      fetchEquipment();
    }
      
      catch (error) {
        console.log(error);
      }
    

  
  }, [equipment]);
  
 
    if (equipmentData) {
      equipmentData.slice(0,3).forEach(element => {
        console.log(element.name + " This is for each equipmentData element.name");
      
      });
    }

  
  return (
    <div>
      <h2>Equipment Used: {equipment.name}</h2>
      {/* You can use the 'equipment' prop in your component's UI */}
    </div>
  );
};


