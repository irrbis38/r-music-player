import { useEffect, useState } from "react";

import { ButtonPrev } from "../Buttons/ButtonPrev";
import { ButtonPlay } from "../Buttons/ButtonPlay";
import { ButtonPause } from "../Buttons/ButtonPause";
import { ButtonNext } from "../Buttons/ButtonNext";

import s from "./Player.module.scss";

export const Player = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlay,
  setIsPlay,
  audioRef,
}) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    translateX: 0,
  });

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
    const translateX = Math.round((currentTime * 100) / duration);
    setSongInfo({ ...songInfo, currentTime, duration, translateX });
  };

  // const onEndHandler = async () => {
  //   const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  //   await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  //   if (isPlay) audioRef.current.play();
  // };

  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const skipSong = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-to-next") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      if ((currentIndex - 1) % songs.length < 0) {
        await setCurrentSong(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      }
    }
    // autoplay if isPlay true
    if (isPlay) audioRef.current.play();
  };

  // set class active to selected song
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (currentSong.id === song.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);

  return (
    <div>
      <div className={s.player__time}>
        <p>{getTime(songInfo.currentTime)}</p>
        <div className={s.player__progress}>
          <div className={s.player__bg}>
            <div
              className={s.player__inner}
              style={{
                transform: `translateX(${songInfo.translateX}%)`,
                background: `linear-gradient(to left top, ${currentSong.color[0]}, ${currentSong.color[1]})`,
              }}
            ></div>
          </div>
          <input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            className={s.player__range}
          />
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className={s.player__control}>
        <ButtonPrev skipSong={skipSong} />
        {isPlay ? (
          <ButtonPause playHandler={playHandler} />
        ) : (
          <ButtonPlay playHandler={playHandler} />
        )}
        <ButtonNext skipSong={skipSong} />
      </div>
      <audio
        // onEnded={onEndHandler}
        onTimeUpdate={onTimeUpdateHandler}
        onLoadedMetadata={onTimeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
      ></audio>
    </div>
  );
};
