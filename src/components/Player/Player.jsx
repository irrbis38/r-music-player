import { useRef } from "react";

import { ButtonPrev } from "../Buttons/ButtonPrev";
import { ButtonPlay } from "../Buttons/ButtonPlay";
import { ButtonPause } from "../Buttons/ButtonPause";
import { ButtonNext } from "../Buttons/ButtonNext";

import s from "./Player.module.scss";

export const Player = ({ currentSong, isPlay, setIsPlay }) => {
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
  return (
    <div>
      <div className={s.player__time}>
        <p>Start time</p>
        <input type="range" className={s.player__range} />
        <p>End time</p>
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
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
};
