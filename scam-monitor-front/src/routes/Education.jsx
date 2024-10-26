import '../styles/education.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/Navbar";

function Education() {
  const navigate = useNavigate();

  return (
    <div className="education-container">
      <h1 className="education-main-title">Amenazas más comunes</h1>
      
      <div
        className="education-card"
        onClick={() => navigate('/education/phishing')} 
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Phishing</p>
      </div>
      <div
        className="education-card"
        onClick={() => navigate('/education/tec_support_calls')} 
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Llamadas de soporte técnico falsas</p>
      </div>
      <div
        className="education-card"
        onClick={() => navigate('/education/prices_lotery')}
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Estafas de premios y loterías</p>
      </div>
      <NavBar />
    </div>
  );
}

export default Education;
