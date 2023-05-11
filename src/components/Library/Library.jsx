import { PlayerContext } from "../../context/context";
import { LibrarySong } from "../LibrarySong/LibrarySong";

import s from "./Library.module.scss";
import { useContext } from "react";

export const Library = ({ songs, setCurrentSong, audioRef, setSongs }) => {
  const { isLibraryVisible } = useContext(PlayerContext);
  return (
    <div className={`${s.library} ${isLibraryVisible ? s.active : ""}`}>
      <h2 className={s.library__title}>Library</h2>
      <div className={s.library__wrapper}>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
