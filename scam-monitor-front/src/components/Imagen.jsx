import React, { useRef } from 'react';
import '../styles/imagen.css';
import gallery from "../images/gallery.png";
import imagendos from '../images/upload_image.png';
import question from "../images/question.png" 
import { useNavigate } from 'react-router-dom';

import PopUpIA from "./PopUpIA"
function Imagen() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleContainerClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file);
    }
  };
    return (
      <div className="imagen-container">
        <div className="imagen-card">
        <p className="title-image">Analyze image</p>
        <img className="icon-gallery" src={gallery} alt="Call icon" /> 

      </div>
      <p className='imagen-description'>Tapping the blue rectangle will open your gallery. 
        Select the screenshot you took that seems suspicious.
        We will use Artificial Intelligence to analyze this image and tell you what is going on.</p>
        <button className="button-help">
      <img className="question-mark" src={question} alt="Call icon" /> 
        ¿What is artificial intelligence?
        </button>
        <div className="upload-container"
        onClick={handleContainerClick}>
        
          <img className="imagendos" src={imagendos} alt="Call icon" /> 
          <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"  
          style={{ display: 'none' }}  
        />
        </div>    
        <button 
        onClick={() => navigate('/fraud/image/response')} 
        style={{ cursor: 'pointer' }} 
        className="analisis-button"
      >
        Get analysis
      </button>
      </div>
    );
  }
  
  export default Imagen;
  