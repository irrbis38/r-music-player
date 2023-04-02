import { ButtonPrev } from "../Buttons/ButtonPrev";
import { ButtonPlay } from "../Buttons/ButtonPlay";
import { ButtonNext } from "../Buttons/ButtonNext";

import s from "./Player.module.scss";

export const Player = () => (
  <div>
    <div className={s.player__time}>
      <p>Start time</p>
      <input type="range" className={s.player__range} />
      <p>End time</p>
    </div>
    <div className={s.player__control}>
      <ButtonPrev />
      <ButtonPlay />
      <ButtonNext />
    </div>
  </div>
);
