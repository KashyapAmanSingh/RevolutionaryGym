
//   0b73801f7amsh673f0bdebae59e4p1eeaf7jsnbc4316ef1ea0 



// const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
export const Exerciseoptions = {
	method: 'GET',
	headers: {
		
		'X-RapidAPI-Key': '0b7814825cmsh8468ca29b8c8ec8p1b9bc1jsn2e1441058d7a',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
// 'X-RapidAPI-Key': 'e2b3ed35f9msh680d1f71d69a58fp16aa11jsnc6b140c09d98',
// 'X-RapidAPI-Key': 'ba345fd4a5msh9414bdac188e8f9p11353ajsn15aefcef637b',
// eslint-disable-next-line react-refresh/only-export-components
export const fetchData = async (url, options) => {
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








