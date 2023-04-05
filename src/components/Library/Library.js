import { LibrarySong } from "../LibrarySong/LibrarySong";

import s from "./Library.module.scss";

export const Library = ({ songs }) => {
  return (
    <div className={s.library}>
      {songs.map((song) => (
        <LibrarySong song={song} />
      ))}
    </div>
  );
};