import { Player } from "./components/Player/Player";
import { Song } from "./components/Song/Song";

export const App = () => (
  <div className="App">
    <h1>Music Player</h1>
    <Song />
    <Player />
  </div>
);
