import { LibrarySong } from "../LibrarySong/LibrarySong";

import s from "./Library.module.scss";

export const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlay,
  setSongs,
}) => {
  return (
    <div className={s.library}>
      <h2 className={s.library__title}>Library</h2>
      <div className={s.library__wrapper}>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlay={isPlay}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
