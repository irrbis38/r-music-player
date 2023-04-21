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
  const [isPlay, setIsPlay] = useState(false);
  // const [isLibraryVisible, setIsLibraryVisible] = useState(false);
  const audioRef = useRef(null);
  return (
    <div className={`app ${isLibraryVisible ? "library__active" : ""}`}>
      <Nav
        isLibraryVisible={isLibraryVisible}
        // setIsLibraryVisible={setIsLibraryVisible}
      />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlay={isPlay}
        setSongs={setSongs}
        isLibraryVisible={isLibraryVisible}
      />
    </div>
  );
};
