import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import Fraud from "./routes/Fraud.jsx"
import Image from "./components/Imagen.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/fraud" element={<Fraud />} />
            <Route path="/fraud/image" element={<Image />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
