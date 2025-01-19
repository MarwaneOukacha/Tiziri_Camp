import React from "react";
import '../Team.css';  // Ensure you import your CSS file

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>This is our team.</p>
        </div>
        <div key="1" className="col-md-12 col-sm-12 d-flex align-items-center">
          <div className="thumbnail d-flex">
            <img src="/img/Mohamed.jpg" alt="Mohamed El Morabity" className="team-img" style={{ height: '300px', width: '300px', marginRight: '20px' }} />
            <div className="caption">
              <h4>Mohamed El Morabity</h4>
              <p><strong>Manager</strong></p>
              <p>Born in Zagora, Morocco, at the gateway to the Moroccan desert, I am a professional trail runner. Inspired by the legendary Ahansal brothers and my own sibling, who won the famous Marathon des Sables, I developed a passion for running at a young age. Over time, I started winning races in Morocco and participated in the Marathon des Sables for the first time in 2017, where I finished second behind my brother. Since then, I've traveled the world, winning races in deserts (Tunisia, Oman) and mountains (Cappadocia, Alps, Canada). I am eager to share my experiences and pro tips with you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};