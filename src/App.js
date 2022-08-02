import NavBar from "./components/NavBar";
import MemeText from "./components/MemeText";
import GeneratedMeme from "./components/GeneratedMeme";
import { Route, Routes } from "react-router-dom";
import UploadImage from "./components/UploadImage";
import CustomizeMeme from "./components/CustomizeMeme";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<MemeText />} />
        <Route path="/generate" element={<GeneratedMeme />} />
        <Route path="/uploadMeme" element={<UploadImage />} />
        <Route path="/customize" element={<CustomizeMeme />} />
      </Routes>
    </div>
  );
}

export default App;
