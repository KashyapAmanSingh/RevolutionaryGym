import { useLocation } from 'react-router-dom';
import { fetchData, Exerciseoptions } from './ApiStore';
import { useEffect, useState } from 'react';

const DetailShow = () => {
  const location = useLocation();
  const { id } = location.state;
  const [detail, setDetails] = useState(null);

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
    return <p>Loading...</p>;
  }

  const { bodyPart, name, equipment, target, id: detailId, gifUrl } = detail;

  return (
    <div>
      <div className="col-sm-4 mb-3">
        <div className="card" style={{ width: '300%' }}>
          <img loading="lazy" className="card-img-top" src={gifUrl} alt={bodyPart} />
          <div className="card-body">
            <p className="card-text">This is body parts: {bodyPart}</p>
            <p className="card-text">{name}</p>
            <p className="card-text">{equipment}</p>
            <p className="card-text">{target}</p>
            <p className="card-text"> {detailId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailShow;
