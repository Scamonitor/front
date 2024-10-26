import '../styles/education.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/Navbar";
import pishing from "../images/phishing.png"
import fakecall from  "../images/fakecall.png"
import gift from "../images/gift.png"
function Education() {
  const navigate = useNavigate();

  return (
    <div className="education-container">
      <div className='medium-container'>
      <div
        className="education-card"
        onClick={() => navigate('/education/phishing')} 
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Phishing</p>
        <img className="icon-image" src={pishing} alt="Call icon" />
      </div>
      <div
        className="education-card"
        onClick={() => navigate('/education/tec_support_calls')} 
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Llamadas falsas</p>
        <img className="fake-image-call" src={fakecall} alt="Call icon" />
      </div>
      <div
        className="education-card"
        onClick={() => navigate('/education/prices_lotery')}
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Estafas de premios</p>
        <img className="icon-image" src={gift} alt="Call icon" />
      </div>
      </div>

      <NavBar />
    </div>
  );
}

export default Education;
