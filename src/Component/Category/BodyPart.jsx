/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchData, Exerciseoptions } from "../ApiFetch/ApiStore"; // Check this import

// eslint-disable-next-line react/prop-types
export  const BodyPart = ({ bodypart }) => {
  const [BodyPart, setBodyPart] = useState(null);
  // console.log( bodypart + "This is BodyPartBodyPartBodyPart");
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`;

  useEffect(() => {
    const fetchBodypart = async () => {
      try {
        const AllBodyPart = await fetchData(url, Exerciseoptions);
        setBodyPart(AllBodyPart);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchBodypart();
  }, [bodypart]);


    if (BodyPart) {
      BodyPart.slice(0,3).forEach(element => {
        console.log(element.name + " This is for each BodyPart element.name");
     
      });
    }
  

  return (
    <>
      <div>BodyPart</div>
      <h2>Bodypart Used: {bodypart}</h2>
    </>
  );
};



