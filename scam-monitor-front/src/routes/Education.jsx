import '../styles/education.css';
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();

  return (
    <div className="education-container">
      <div
        className="education-card"
        onClick={() => navigate('/education/common-threats')} 
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Amenazas más comunes</p>
      </div>
      <div
        className="education-card"
        onClick={() => navigate('/education/detect-threats')} 
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Cómo detectar una amenaza</p>
      </div>
      <div
        className="education-card"
        onClick={() => navigate('/education/react-threats')}
        style={{ cursor: 'pointer' }}
      >
        <p className="education-title">Cómo actuar ante una amenaza</p>
      </div>
    </div>
  );
}

export default Education;
