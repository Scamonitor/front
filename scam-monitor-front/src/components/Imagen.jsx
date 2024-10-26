import React, { useRef } from "react";
import "../styles/imagen.css";
import gallery from "../images/gallery.png";
import imagendos from "../images/upload_image.png";
import question from "../images/question.png";
import { useNavigate } from "react-router-dom";

import PopUpIA from "./PopUpIA";
function Imagen() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const fileInputRef = useRef(null);

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Archivo seleccionado:", file);
    }
  };

  const uploadReport = () => {
    const formData = new FormData();
    formData.append("image_file", fileInputRef.current.files[0]);
    formData.append("type", "IMAGE");
    setLoading(true);
    fetch("http://127.0.0.1:5000/reports", {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Assuming the backend responds with JSON
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/fraud/image/response", { state: { report: data } });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div className="imagen-container">
      <div className="imagen-card">
        <p className="test-title">Analyze image</p>
        <img className="icon-gallery" src={gallery} alt="Call icon" />
      </div>
      <p className="imagen-description">
        Tapping the blue rectangle will open your gallery. Select the screenshot
        you took that seems suspicious. We will use Artificial Intelligence to
        analyze this image and tell you what is going on.
      </p>
      <button className="button-help">
        <img className="question-mark" src={question} alt="Call icon" />
        ¿What is artificial intelligence?
      </button>
      <div className="upload-container" onClick={handleContainerClick}>
        <img className="imagendos" src={imagendos} alt="Call icon" />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>
      <button
        disabled={loading}
        onClick={() => uploadReport()}
        style={{ cursor: "pointer" }}
        className={`analisis-button ${loading ? "loading" : ""}`}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}

export default Imagen;
