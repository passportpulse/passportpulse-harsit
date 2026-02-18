"use client";

import React from "react";

const FloatingButtons = () => {
  // Updated Phone Number from poster
  const phoneNumber = "+919609387089";

  // Client-centric pre-defined message
  const message =
    "Hi Passport Pulse Team! I'm interested in discussing a project. Could you please provide more information?";

  // Message-ti URL-er jonno encode kora hocche
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/919609387089?text=${encodedMessage}`;
  const callLink = `tel:${phoneNumber}`;

  return (
    <div className="floating-buttons-container">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href={callLink} className="floating-button call" aria-label="Call Now">
        <i className="fas fa-phone"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;