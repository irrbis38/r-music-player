import { LibrarySong } from "../LibrarySong/LibrarySong";

import s from "./Library.module.scss";

export const Library = ({ songs }) => {
  return (
    <div className={s.library}>
      <h2 className={s.library__title}>Library</h2>
      <div className={s.library__wrapper}>
        {songs.map((song) => (
          <LibrarySong key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};
