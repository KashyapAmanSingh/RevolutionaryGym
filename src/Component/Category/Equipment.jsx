/* eslint-disable react/prop-types */
// Inside the Equipment component
import { useEffect, useRef, useState } from "react";
import { fetchData, Exerciseoptions } from "../ApiFetch/ApiStore";
import ScrollButtons from "../ScrollBtn/ScrollButton";
import { useNavigate } from "react-router-dom";


export const Equipment = ({ equipment }) => {

  const scrollContainer = useRef(null);
  const navigate = useNavigate();
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

  const handleCardClick = (navigate, id) => {
    navigate(`/DetailShow/${id}`, { state: { id } });
    window.scrollTo(0, 0);

  };
  
  return (
    <div className="mt-5">
      <h2>Equipment Used: {equipment.name}</h2>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-12">
            <div className="d-flex flex-row flex-nowrap overflow-auto" ref={scrollContainer}>
              {equipmentData &&
                equipmentData.slice(10).map((element, index) => (
                  <div key={index} className="col-sm-4 "  >
                    <div className="exercise-card"  onClick={() => handleCardClick(navigate,element.id)}>
                      <img src={element.gifUrl} alt={element.name} />
                      <div className="card-body fw-bold ">
        
            <p className="card-text  float-left">
         
           
                Equipment Used: <button className='btn btn-info '> {element.equipment.toUpperCase()}</button>  
     
            </p>
            <p > Name: <button className='btn btn-info '>{element.name.toUpperCase()}</button>      </p>
            </div>
            </div>
                    </div>
              
                ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollButtons scrollContainer={scrollContainer} />

    </div>

  );
};