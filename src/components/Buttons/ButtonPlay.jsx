import s from "./Button.module.scss";

export const ButtonPlay = ({ playHandler }) => (
  <button
    className={s.btn}
    onClick={() => {
      playHandler();
    }}
  >
    <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z"
        fill="#000"
      />
    </svg>
  </button>
);
