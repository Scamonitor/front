import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import Fraud from "./routes/Fraud.jsx"
import Image from "./components/Imagen.jsx"
import Audio from "./components/Audio.jsx"
import Profile from "./routes/Profile.jsx";
import Education from "./routes/Education.jsx";
import Phishing from "./components/Phishing.jsx";
import ImageResponse from "./components/ImageResponse.jsx";
import FakeCall from "./components/FakeCall.jsx"
import ExampleComponent from "./components/ExampleComponent.jsx";
import PricesLotery from "./components/PricesLotery.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/fraud" element={<Fraud />} />
            <Route path="/fraud/image" element={<Image />} />
            <Route path="/fraud/audio" element={<Audio />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/education" element={<Education />} />
            <Route path="/education/phishing" element={<Phishing />} />
            <Route path="/fraud/image/response" element={<ImageResponse />} />
            <Route path="/education/tec_support_calls" element={<FakeCall />} />
            <Route path="/phishing/ejemplos" element={<ExampleComponent />} />
            <Route path="/education/prices_lotery" element={<PricesLotery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;