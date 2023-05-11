// import { playAudio } from "../../utils";
import { PlayerContext } from "../../context/context";
import { useContext } from "react";
import s from "./LibrarySong.module.scss";

export const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  // isPlay,
  setSongs,
}) => {
  const { isPlay } = useContext(PlayerContext);
  const { id } = song;
  const setSongHandler = async () => {
    const selectedSong = songs.filter((item) => id === item.id);
    await setCurrentSong(...selectedSong);

    // set class active to selected song
    const newSongs = songs.map((song) => {
      if (id === song.id) {
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

    // autoplay if isPlay true
    if (isPlay) audioRef.current.play();
  };
  return (
    <div
      className={song.active ? `${s.librarySong} ${s.active}` : s.librarySong}
      onClick={setSongHandler}
    >
      <div className={s.librarySong__cover}>
        <img src={song.cover} alt={song.name} />
      </div>
      <div className={s.librarySong__description}>
        <p className={s.librarySong__name}>{song.name}</p>
        <p className={s.librarySong__artist}>{song.artist}</p>
      </div>
    </div>
  );
};
