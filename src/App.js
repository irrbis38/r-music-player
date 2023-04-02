import { Player } from "./components/Player/Player";
import { Song } from "./components/Song/Song";

import "./app.scss";

export const App = () => (
  <div className="App">
    <Song />
    <Player />
  </div>
);
