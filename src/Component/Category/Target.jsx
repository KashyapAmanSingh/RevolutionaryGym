/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { fetchData, Exerciseoptions } from '../ApiFetch/ApiStore';

export const Target = ({ target }) => {


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




    return (
        <div className="mt-5">
            <h2>Target Used: {target.name}</h2>
            <div className='container-fluid'>
                <div className='row'>
                    {targetData &&
                        targetData.slice(0, 3).map((element, index) => (
                            <div key={index} className='col-sm-4'>
                                <div className="exercise-card">
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

    );
};

