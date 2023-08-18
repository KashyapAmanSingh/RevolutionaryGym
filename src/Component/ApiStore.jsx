

	

// const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
export  const Exerciseoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b73801f7amsh673f0bdebae59e4p1eeaf7jsnbc4316ef1ea0',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



export  const fetchData = async (url, options) => {   
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
}











