/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { fetchData, Exerciseoptions } from "../ApiFetch/ApiStore"; // Check this import
import ScrollButtons from "../ScrollBtn/ScrollButton";
import { useNavigate } from "react-router-dom";
import gym from '../Image/gym-min.png'
import ShimmerEffect from "../ShimmerUI/ShimmerUI";


export const BodyPart = ({ bodypart }) => {
  const [BodyPart, setBodyPart] = useState(null);
  const navigate = useNavigate();
  const scrollContainer = useRef(null);

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



  const handleCardClick = (navigate, id) => {
    navigate(`/DetailShow/${id}`, { state: { id } });
    window.scrollTo(0, 0);

  };

  return (
    <div className="mt-5">
      <h1 className=' text-white fw-bold text-center bg-dark'>Recommended Exercise Akin to BodyPart</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-row flex-nowrap overflow-auto" ref={scrollContainer}>
              {BodyPart &&
                BodyPart.slice(1).map((element, index) => (
                  <div key={index} className="col-sm-4">
                    <div className="exercise-card " onClick={() => handleCardClick(navigate, element.id)}>
                      <img src={element.gifUrl} alt={element.name} />
                      <div className="card-body fw-bold" >
                        <p className="card-text  float-left">


                          BodyPart Involved: <button className='btn btn-info card_button'> {element.bodyPart.toUpperCase()}</button>

                        </p>
                        <p > Name: <button className='btn btn-info '>{element.name.toUpperCase()}</button>      </p>
                      </div>
                    </div>
                  </div>
                ))}
              {!BodyPart && (<ShimmerEffect video={false} />)}

            </div>
          </div>
        </div>
      </div>

      <ScrollButtons scrollContainer={scrollContainer} />

    </div>

  );
};




