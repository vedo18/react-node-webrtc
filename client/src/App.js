import { Route, Routes } from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen />}></Route>

        <Route path="/room/:roomId" element={<RoomPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
