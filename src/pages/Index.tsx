import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/ja5.png";
import logo2 from "../assets/img/ja1.png";
import linkedin from "../assets/img/in.png";
import x from "../assets/img/x.png";
import email from "../assets/img/email.png";

const rotatingWords = ["Jeffamzn.", "The Poast."];
export default function Index() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Rotating words effect for header
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Load hCaptcha script once on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo2} alt="Shilll Logo" />
      </div>

      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>SHILLL</h4>
            <h1>
              Makers of{" "}
              <span className={fadeOut ? "fade-out" : "fade-in"}>
                {rotatingWords[index]}
              </span>
            </h1>
            <p>Sign up to stay informed.</p>
          </div>

          <form method="post" action="https://app.jeffamzn.com/subscription/form">
            <div className="input-wrapper">
              <input
                className="email"
                type="email"
                name="email"
                required
                placeholder="Business Email Address *"
                aria-label="Business Email Address"
              />
              <button className="submit" type="submit">
                Subscribe
              </button>
            </div>

            <input
              id="6d48f"
              type="hidden"
              name="l"
              value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
            />
            <input type="hidden" name="nonce" />
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo2} alt="Shilll Logo" />
          </div>
          <div className="footer-links">
            <div className="column">
              <h4>Company</h4>
              <Link to="#">About</Link>
              <Link to="#">Sign Up</Link>
            </div>
            <div className="column">
              <h4>Support</h4>
              <a href="mailto:hey@shilll.com">Contact</a>
              <a href="mailto:press@shilll.com">Press</a>
            </div>
            <div className="column">
              <h4>Shilll</h4>
              <a href="https://jeffamzn.com" target="_blank" rel="noopener noreferrer">
                Jeffamzn
              </a>
              <a href="https://thepoast.com" target="_blank" rel="noopener noreferrer">
                The Poast
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-meta">
            <a
              href="https://policies.google.com/privacy?hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://policies.google.com/terms?hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
          <div className="footer-social">
            <a href="https://x.com/shilll" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="X (formerly Twitter)" />
            </a>
            <a
              href="https://linkedin.com/company/signore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="mailto:hey@shilll.com">
              <img src={email} alt="Email us" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
