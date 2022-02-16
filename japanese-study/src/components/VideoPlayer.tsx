import { FC } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayer {
  name: string;
  url: string;
}

const VideoPlayer: FC<VideoPlayer> = ({ name, url }) => {
  return (
    <div className="my-4">
      <h2>{name}</h2>
      <ReactPlayer url={url} controls />
    </div>
  );
};

export default VideoPlayer;
