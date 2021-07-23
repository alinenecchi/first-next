import React from 'react';
import { Player, BigPlayButton } from 'video-react';

const Video = () => {
  return (
      <div className="video">
    <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
      <BigPlayButton position="center" /> 
    </Player>
    </div>
  );
};
export default Video;