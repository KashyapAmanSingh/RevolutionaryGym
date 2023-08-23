

	

// const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
export  const Exerciseoptions = {
	method: 'GET',
	headers: {
		
		'X-RapidAPI-Key': 'e2b3ed35f9msh680d1f71d69a58fp16aa11jsnc6b140c09d98',
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


// 'X-RapidAPI-Key': '29abfac3e9msh7595dddd6423bd1p120c10jsn03f6a232770b',








