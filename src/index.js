import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function App() {
  const [isPopupActive, setPopupActive] = useState(false);

  const toggle = () => {
    setPopupActive(!isPopupActive);
  };

  const handleSubmit = async (event) => {
    // ... (your form submission logic)
    toggle();
  };

  return (
    <div>
      <div className="header-push-down"></div>
      <header className="blur disable-selection">
        <nav>
          <div className="left">
          <img src={require('./images/icon/icon.png')} alt="OpenCodeEra logo" />
          <a href="/index.html">
              <span className="blue">Open</span>
              <span className="white">Code</span>
              <span className="blue">Era</span>
            </a>
          </div>
          <div className="right">
            <ul>
              <li>
                <a className="about" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="contact-us" href="#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="services"
                  target="_blank"
                  href="https://github.com/orgs/OpenCodeEra/repositories"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="blur">
        <section className="firstsection disable-selection">
          <div className="leftSection">
            <div className="white">
              <span className="blue">Welcome! </span> Contributors, Elevate Your Impact with{' '}
              <span className="focus-gradient">Open Source</span>
              <span id="element"></span>
            </div>
          </div>

          <div className="rightSection">
          <img src={require('./images/Api Programming logo.png')} alt="Open Code Era logo" />
          </div>
        </section>

        <hr />

        <section className="secondSection" id="about">
          <div className="second-section-container">
            <div className="leftSection">
            <img src={require('./images/illustrations/goals.png')} alt="goals" />
            </div>

            <div className="rightSection">
              <h2>Our Mission</h2>
              <span className="text-gradient-blue-white">
                <p>
                  Open Code Era fosters open source culture, encouraging collaboration in software
                  development within the developer community.
                </p>
              </span>
            </div>
          </div>
        </section>

        <hr />

        <section className="contactSection" id="contact">
          <div className="leftContact">
            <h2>Get in Touch!</h2>
            <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
            <img src={require('./images/illustrations/Get in touch.png')} alt="Get In Touch" />
          </div>

          <div className="rightContact">
            <form
              id="messageForm"
              action="https://formspree.io/f/mwkdbzaq"
              method="POST"
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                rows="8"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission [OpenCodeEra]"
              />
              <button id="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <div id="popup" className={isPopupActive ? 'active' : ''}>
        <h2 id="form-status">Thanks for your submission!</h2>
        <button id="close" onClick={toggle}>
          Close
        </button>
      </div>

      <footer className="blur disable-selection">
        <div className="footer">
          <div className="footer-first">
            <h3>Open Code Era</h3>
          </div>

          <div className="footer-second">
            <ul>
              <h4>Support</h4>
              <li>
                <a href="https://github.com/OpenCodeEra">Our Projects</a>
              </li>
              <li>
                <a href="/team_list.html">Our Team</a>
              </li>
            </ul>
          </div>

          <div className="footer-third"></div>

          <div className="footer-fourth">
            <a href="https://github.com/OpenCodeEra/OpenCodeEra">
            <img src={require('./images/logo/github-mark-white.png')} alt="github-logo" />

               Improve this page on GitHub
            </a>
          </div>
        </div>

        <div className="footer-rights">
          Copyright &copy; opencodeera.pages.dev | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

function toggle() {
  // This function is used to toggle the popup visibility
  // You can implement it as needed
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);