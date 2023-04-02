import { useState } from "react";

import { Player } from "./components/Player/Player";
import { Song } from "./components/Song/Song";

import chillHop from "./data";

import "./app.scss";

export const App = () => {
  const [songs, setSong] = useState(() => chillHop());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
};
