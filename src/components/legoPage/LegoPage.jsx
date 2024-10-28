import React from 'react';
import './LegoPage.css'; // Make sure this path is correct

const LegoPage = () => {
  return (
    <div className="game-container">
      <iframe 
        src="https://itch.io/embed-upload/11255664?color=333333" 
        allowFullScreen
      >
        <a href="https://nickuungmailcom.itch.io/scalestacker">Play ScaleStacker on itch.io</a>
      </iframe>
    </div>
  );
};

export default LegoPage;
