import React from 'react';
import '../styles/exampleComponent.css';

function ExampleComponent() {
  return (
    <div className="example-phishing-container">
      <h2 className="example-header">Ejemplos</h2>
      
      <div className="phishing-section">
        <h3 className="section-title">Examples of Real Phishing Messages:</h3>
        <h4>1. Correo Electrónico de Supuesto Banco:</h4>
        <div className="gmail-container">
          <p><strong>Subject:</strong> "Su cuenta ha sido suspendida - Necesita acción inmediata"</p>
          <p><strong>Body:</strong> Dear Customer, We have detected unusual activity on your account.
        To protect your account, we have temporarily suspended your access.
        Please click the link below to verify your information and restore access to your account. <a href="#link">[Haga clic aquí para verificar]</a> 
        If you do not verify your account within the next 24 hours, it will be permanently blocked. Sincerely, [Bank Name] Customer Support</p>
        </div>
      </div>

      <div className="phishing-section">
        <h3 className="section-title">Ejemplos de Mensajes Legítimos:</h3>
        <h4>1. Real Bank Email:</h4>
        <div className="gmail-container">
          <p><strong>Subject:</strong> "Confirmation of the recent transaction"</p>
          <p><strong>Body:</strong> Dear [Customer Name], We confirm that a transaction for an amount of $500.00 has been made on October 25, 2024 at 3:00 PM from your account [account number].
          If you do not recognize this transaction, please log in to your account through our official page and contact us. Thank you for your preference, [Bank Name]</p>
        </div>
      </div>
    </div>
  );
}

export default ExampleComponent;
