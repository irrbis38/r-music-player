import s from "./LibrarySong.module.scss";

export const LibrarySong = ({ song, songs, setCurrentSong }) => {
  const setSongHandler = () => {
    const selectedSong = songs.filter((item) => song.id === item.id);
    setCurrentSong(...selectedSong);
  };
  return (
    <div className={s.librarySong} onClick={setSongHandler}>
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
