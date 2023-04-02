import s from "./Song.module.scss";

export const Song = ({ currentSong }) => {
  return (
    <div className={s.song}>
      <div className={s.song__cover}>
        <img src={currentSong.cover} alt={currentSong.name} />
      </div>
      <p className={s.song__name}>{currentSong.name}</p>
      <p className={s.song__artist}>{currentSong.artist}</p>
    </div>
  );
};
