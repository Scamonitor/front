import React from 'react';
import '../styles/exampleComponent.css';

function ExampleComponent() {
  return (
    <div className="example-container">
      <h2 className="example-header">Ejemplos</h2>
      
      <div className="phishing-section">
        <h3 className="section-title">Ejemplos de Mensajes de Phishing Reales:</h3>
        <div className="message">
          <h4>1. Correo Electrónico de Supuesto Banco:</h4>
          <p><strong>Asunto:</strong> "Su cuenta ha sido suspendida - Necesita acción inmediata"</p>
          <p><strong>Cuerpo:</strong> Estimado cliente, Hemos detectado actividad inusual en su cuenta. Para protegerla, hemos suspendido temporalmente su acceso. Por favor, haga clic en el siguiente enlace para verificar su información y restaurar el acceso a su cuenta. <a href="#link">[Haga clic aquí para verificar]</a> Si no verifica su cuenta en las próximas 24 horas, será permanentemente bloqueada. Atentamente, Soporte al cliente de [Nombre del Banco]</p>
          <h5>Señales de Phishing:</h5>
          <ul>
            <li>Enlace sospechoso que no corresponde al dominio del banco.</li>
            <li>Lenguaje urgente para presionar a la acción.</li>
            <li>Gramática y ortografía a veces deficientes.</li>
          </ul>
        </div>
      </div>

      <div className="legitimate-section">
        <h3 className="section-title">Ejemplos de Mensajes Legítimos:</h3>
        <div className="message">
          <h4>1. Correo Electrónico Real de un Banco:</h4>
          <p><strong>Asunto:</strong> "Confirmación de la transacción reciente"</p>
          <p><strong>Cuerpo:</strong> Estimado(a) [Nombre del Cliente], Le confirmamos que se ha realizado una transacción por un monto de $500.00 el 25 de octubre de 2024 a las 3:00 PM desde su cuenta [número de cuenta]. Si no reconoce esta transacción, por favor inicie sesión en su cuenta a través de nuestra página oficial y contáctenos. Gracias por su preferencia, [Nombre del Banco]</p>
          <h5>Características de un Mensaje Legítimo:</h5>
          <ul>
            <li>El enlace es al dominio oficial del banco.</li>
            <li>La información es personalizada.</li>
            <li>El mensaje no presiona para hacer clic en un enlace ni usa urgencia indebida.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExampleComponent;
