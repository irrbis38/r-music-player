import s from "./LibrarySong.module.scss";

export const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlay,
  setSongs,
}) => {
  const { id } = song;
  const setSongHandler = () => {
    const selectedSong = songs.filter((item) => id === item.id);
    setCurrentSong(...selectedSong);

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

    // autoplay if isPlay ture
    if (isPlay) {
      const playPromise = audioRef.current.play();
      if (playPromise) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
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
