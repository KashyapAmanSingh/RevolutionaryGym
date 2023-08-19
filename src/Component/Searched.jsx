import { useState, useEffect } from 'react';
import { fetchData, Exerciseoptions } from './ApiFetch/ApiStore';
import { useNavigate } from 'react-router-dom';


const Searched = () => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises';
  const [search, setSearch] = useState('');
  const [searchedExercise, setSearchedExercise] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(searchedExercise)
  // console.log(searchedExercise.length)
  const navigate = useNavigate();

  useEffect(() => {
    fetchAll();
  }, []); // runs only on initial load

  const fetchAll = async () => {
    try {
      const AllData = await fetchData(url, Exerciseoptions);

      if (search) {
        const filteredData = AllData.filter((data) =>
          ['bodyPart', 'target', 'name', 'equipment'].some((field) =>
            data[field].toLowerCase().includes(search)
          )
        );

        setSearchedExercise(filteredData);
      } else {
        setSearchedExercise(AllData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardClick = (id) => {
    navigate(`./DetailShow/${id}`, { state: { id } });
  };

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(searchedExercise.length / 10) && selectedPage !== page) {
      setPage(selectedPage);
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-8">
            <input
              name="searched_data"
              id="inpt"
              placeholder="Search the Exercise..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-sm-4">
            <button type="button" onClick={fetchAll} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {searchedExercise.length > 0 && searchedExercise.slice(page * 10 - 10, page * 10).map((data) => (
            <div key={data.id} className="col-sm-4 mb-3" onClick={() => handleCardClick(data.id)}>
              <div className="card" style={{ width: '100%' }}>
                <img loading="lazy" className="card-img-top" src={data.gifUrl} alt={data.bodyPart} />
                <div className="card-body">
                  <p className="card-text">{data.bodyPart}</p>
                  <p className="card-text">{data.name}</p>
                  <p className="card-text">{data.equipment}</p>
                  <p className="card-text">{data.target}</p>
                  <p className="card-text"> {data.id}</p>
                    </div>
              </div>
            </div>
          ))}
        </div>
        {searchedExercise.length > 0 && (
          <div className="row">
            <nav>
              <ul className="pagination justify-content-center">
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => selectPageHandler(page - 1)}>Previous</a>
                </li>

                {/* Display first few page links */}
                {[...Array(7)].map((empty, i) => (
                  <li key={page + i} className={`page-item ${page === page + i ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => selectPageHandler(page + i)}>{page + i}</a>
                  </li>
                ))}


                {/* Display ellipsis if there are more pages */}
                {Math.ceil(searchedExercise.length / 10) > 7 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
                {/* Display link to the last page */}
                <li key={searchedExercise.length - 1} className={`page-item ${page === searchedExercise.length - 1 ? 'active' : ''}`}>
                  <a className="page-link" href="#" onClick={() => selectPageHandler(searchedExercise.length - 1)}>{Math.ceil(searchedExercise.length / 10)}</a>
                </li>

                <li className={`page-item ${page === Math.ceil(searchedExercise.length / 10) ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => selectPageHandler(page + 1)}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        )}

      </div>
    </div>
  );
};

export default Searched;