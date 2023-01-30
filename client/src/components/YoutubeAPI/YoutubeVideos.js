import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css"
function YoutubeVideos() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=9`
      )
        .then((result) => result.json())
        .then((data) => {
          const videoData = data.items;
          setVideos(videoData);
        });
    }, []);
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
         
            <div className="latest-videos">
              Latest Videos
            </div>
         
          {videos?.map((singleVideo, index) => (
            <div key={index} className="col-sm-12 col-md-4">
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a
                    href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                    target="_blank "
                  >
                    <img src={singleVideo.snippet.thumbnails.high.url} />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`} target="_blank" rel="noreferer">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                  <div className="publish">
                    Published Date: {singleVideo.snippet.publishedAt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideos;