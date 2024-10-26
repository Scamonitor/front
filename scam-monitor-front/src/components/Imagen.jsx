import React from 'react';
import '../styles/imagen.css';
import imagendos from '../images/upload_image.png'; 
function Imagen() {
    return (
      <div className="imagen-container">
        <div className="imagen-card">
        <p className="title-image">Analyze card</p>
      </div>
      <p>Tapping the blue rectangle will open your gallery. Select the screenshot you took that seems suspicious.</p>
      <div className="upload-image-card">
        <imagendos/>
      </div>
      </div>
    );
  }
  
  export default Imagen;
  