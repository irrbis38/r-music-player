import { useRef, useState } from "react";

import { ButtonPrev } from "../Buttons/ButtonPrev";
import { ButtonPlay } from "../Buttons/ButtonPlay";
import { ButtonPause } from "../Buttons/ButtonPause";
import { ButtonNext } from "../Buttons/ButtonNext";

import s from "./Player.module.scss";

export const Player = ({ currentSong, isPlay, setIsPlay }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const playHandler = () => {
    if (isPlay) {
      audioRef.current.pause();
      setIsPlay(!isPlay);
    } else {
      audioRef.current.play();
      setIsPlay(!isPlay);
    }
  };

  const getTime = (time) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

  const onTimeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  return (
    <div>
      <div className={s.player__time}>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
          className={s.player__range}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className={s.player__control}>
        <ButtonPrev />
        {isPlay ? (
          <ButtonPause playHandler={playHandler} />
        ) : (
          <ButtonPlay playHandler={playHandler} />
        )}
        <ButtonNext />
      </div>
      <audio
        onTimeUpdate={onTimeUpdateHandler}
        onLoadedMetadata={onTimeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
      ></audio>
    </div>
  );
};
