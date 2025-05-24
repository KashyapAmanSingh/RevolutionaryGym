import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData, Exerciseoptions } from '../ApiFetch/ApiStore';
import Video from '../Video';
import { Equipment } from '../Category/Equipment';
import { BodyPart } from '../Category/BodyPart';
import { Target } from '../Category/Target';
import { ShimmerExerciseCard } from '../ShimmerUI/ShimmerUI';


const DetailShow = () => {
  const location = useLocation();
  const { id } = location.state;
  const { id1 } = location.state;
  const [detail, setDetails] = useState(null);
  console.log("This is id of the category " + id + id1)
  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
        const allData = await fetchData(url, Exerciseoptions);
        setDetails(allData);

      } catch (error) {
        console.error(error);
      }
    };
    fetchDetailData();
  }, [id]);

  if (!detail) {
    return <ShimmerExerciseCard />;
  }

  const { bodyPart, name, equipment, target, id: detailId, gifUrl } = detail;

  return (
    <div className='bg-danger'>
      <h1 className=' text-white fw-bold text-center bg-dark mb-0'>Detail Exercise </h1>


      <>
        <div className="container-fluid mb-5 mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-4 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img loading="lazy" className="card-img-top" src={gifUrl} alt={bodyPart} />
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div className="card" style={{ width: '100%' }}>

                <div className="card-body fw-bold">
                  <p className="card-text">This is body parts: {bodyPart}</p>
                  <p className="card-text">{name}</p>
                  <p className="card-text">{equipment}</p>
                  <p className="card-text">{target}</p>
                  <p className="card-text"> {detailId}</p>
                </div>
              </div>
            </div>

          </div>
        </div>




        <Video name={name} />
        <Equipment equipment={equipment} />
        <BodyPart bodypart={bodyPart} />
        <Target target={target} />
      </>

    </div>
  );
};

export default DetailShow;
