import React from "react";
import './style.css';

function MainContent() {
    return(
        <div>
            <main className="main-content">
        <section className="intro">
          <h2>Welcome to the Agriculture Hub</h2>
          <p>Your go-to resource for all things agriculture. Learn about sustainable farming, new technologies, and best practices.</p>
        </section>

        <section className="gallery">
          <h2>Our Fields</h2>
          <div className="image-slider">
            <img src="https://shorturl.at/g267h" alt="Field 1" />
            <img src="https://cdn.wallpapersafari.com/73/39/nk9Lfd.jpg" alt="Field 2" />
            <img src="https://shorturl.at/v7TCR" alt="Field 3" />
          </div>
        </section>
           </main>
        </div>
        
    )
}
export default MainContent;