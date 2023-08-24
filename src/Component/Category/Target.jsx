/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { fetchData, Exerciseoptions } from '../ApiFetch/ApiStore';
import ScrollButtons from '../ScrollBtn/ScrollButton';
import { useNavigate } from 'react-router-dom';

export const Target = ({ target }) => {
    const navigate = useNavigate();
    const scrollContainer = useRef(null);

    const url = `https://exercisedb.p.rapidapi.com/exercises/target/${target}`;
    const [targetData, setTarget] = useState(null);



    useEffect(() => {
        try {
            const fetchTarget = async () => {
                const AllTarget = await fetchData(url, Exerciseoptions);
                setTarget(AllTarget);
            };
            fetchTarget();
        } catch (error) {
            console.log(error);
        }
    }, [target]);


    const handleCardClick = (navigate, id) => {
        navigate(`/DetailShow/${id}`, { state: { id } });
      };
      


    return (
        <div className="mt-5">
        <h2>Target Used: {target.name}</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-row flex-nowrap overflow-auto"  ref={scrollContainer}>
                {targetData &&
                  targetData.slice(17).map((element, index) => (
                    <div key={index} className="col-sm-4">
                      <div className="exercise-card " onClick={() => handleCardClick(navigate,element.id)}>
                        <img src={element.gifUrl} alt={element.name} />
                        <h3>{element.name}</h3>
                        <p>{element.bodyPart}</p>
                        <p>{element.target}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <ScrollButtons   scrollContainer={scrollContainer}/>
      </div>
      
    );
};

