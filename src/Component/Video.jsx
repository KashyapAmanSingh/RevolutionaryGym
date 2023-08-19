/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { youtubeOptions, fetchDataYoutube } from './ApiFetch/ApiStoreYoutube';

const Video = (props) => {
  const [video, setVideo] = useState(null);
  const { name: videoName } = props;

  useEffect(() => {
    const fetchVideoData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const youtubeData = await fetchDataYoutube(
        `${youtubeSearchUrl}/search?query=${videoName} exercise`,
        youtubeOptions
      );
      setVideo(youtubeData.contents);
      // console.log('These are the videos:', youtubeData.contents);
    };

    fetchVideoData();
  }, [videoName]);

  return (
    <div>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center" >
        {video?.slice(0, 4)?.map((item, index) => {
          const videoObject = item.video;
          return (
            <div key={index} >
              <iframe
                width="560"
                height="315"
                className="m-2"
                src={`https://www.youtube.com/embed/${videoObject.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div>Channel Name: {videoObject.channelName} </div>
              <div>Title Name: {videoObject.title} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
