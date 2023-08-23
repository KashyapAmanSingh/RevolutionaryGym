/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { fetchData, Exerciseoptions } from '../ApiFetch/ApiStore';

export const Target = (props) => {
    // eslint-disable-next-line react/prop-types
    const { target } = props;
    console.log(target+"This is Target bro ")

    const url = `https://exercisedb.p.rapidapi.com/exercises/target/${target}`;
    const [targetData, setTarget] = useState(null);
    // console.log(Target + "This is Target");



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
    
 
        if (targetData) {
          targetData.slice(0,3).forEach(element => {
            console.log(element.name + " This is for each targetData element.name");
         
          });
        }
  

    
    return (
        <>
            <div>Target</div>
            <h2>Target Used: {target.target}</h2>
        </>
    );
};



