import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import Fraud from "./routes/Fraud.jsx"
import Image from "./components/Imagen.jsx"
import Audio from "./components/Audio.jsx"
import Profile from "./routes/Profile.jsx";
import Education from "./routes/Education.jsx";
import ImageResponse from "./components/ImageResponse.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/fraud" element={<Fraud />} />
            <Route path="/fraud/image" element={<Image />} />
            <Route path="/fraud/audio" element={<Audio />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/education" element={<Education />} />
            <Route path="/fraud/image/response" element={<ImageResponse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;