/* eslint-disable no-mixed-spaces-and-tabs */
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b73801f7amsh673f0bdebae59e4p1eeaf7jsnbc4316ef1ea0',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	},
  };
  

  
  export const fetchDataYoutube = async (url, options) => {
	// console.log(`Fetching  VIDEO URL ${JSON.stringify(url)}`);
	console.log(`Fetching VIDEO options ${JSON.stringify(options)}`);
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  return result;

	} catch (error) {
	  console.error('Error fetching data from YouTube:', error);
	  throw error;
	}
  };
  