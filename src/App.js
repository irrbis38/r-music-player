import { useState } from "react";

import { Player } from "./components/Player/Player";
import { Song } from "./components/Song/Song";
import { Library } from "./components/Library/Library";

import chillHop from "./data";

import "./app.scss";

export const App = () => {
  const [songs, setSong] = useState(() => chillHop());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlay={isPlay} setIsPlay={setIsPlay} />
      <Library songs={songs} />
    </div>
  );
};
