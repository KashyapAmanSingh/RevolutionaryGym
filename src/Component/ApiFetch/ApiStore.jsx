

	

// const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
export  const Exerciseoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '29abfac3e9msh7595dddd6423bd1p120c10jsn03f6a232770b',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


// eslint-disable-next-line react-refresh/only-export-components
export  const fetchData = async (url, options) => {   
	try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
} catch (error) {
	console.error('Error fetching data from YouTube:', error);
	throw error;
  }
}











