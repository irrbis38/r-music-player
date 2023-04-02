import s from "./Song.module.scss";

export const Song = () => (
  <div className={s.song}>
    <div className="img">Picture</div>
    <p>Song</p>
    <p>Artist</p>
  </div>
);
