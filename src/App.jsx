import { useState, useRef, useContext } from "react";

import { PlayerContext } from "./context/context";

import { Nav } from "./components/Nav/Nav";
import { Player } from "./components/Player/Player";
import { Song } from "./components/Song/Song";
import { Library } from "./components/Library/Library";

import chillHop from "./data";

import "./app.scss";

export const App = () => {
  const { isLibraryVisible } = useContext(PlayerContext);
  const [songs, setSongs] = useState(() => chillHop());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const audioRef = useRef(null);
  return (
    <div className={`app ${isLibraryVisible ? "library__active" : ""}`}>
      <Nav />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        setSongs={setSongs}
      />
    </div>
  );
};
