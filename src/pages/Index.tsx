import { useEffect } from "react";

import logo2 from "../assets/img/ja1.png";
import linkedin from "../assets/img/in.png";
import x from "../assets/img/x.png";
import email from "../assets/img/email.png";

export default function Index() {
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
        <img src={logo2} alt="Jeffamzn Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h1>Sign up to stay informed.</h1>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Let's do it</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
      </div>
<div className="footer">
  <img src={logo2} alt="Logo" />
<div className="footer-top">
  <div className="footer-signup">
    <p>Screw it, let's do it.</p>
    <form method="post" action="https://app.jeffamzn.com/subscription/form">
      <div className="input-wrapper">
        <input className="email" type="email" name="email" required placeholder="Email Address *" />
        <button className="submit" type="submit">Let's do it</button>
      </div>
      <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
      <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
      <input type="hidden" name="nonce" />
    </form>
  </div>
  
<div className="footer-links">
  <div className="column">
    <h4>Company</h4>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="mailto:chris@shilll.com">Contact</a>
  </div>
  <div className="column">
    <h4>Newsletters</h4>
    <a title="Jeffamzn" href="https://www.jeffamzn.com" target="_blank">Jeffamzn</a>
    <a title="The Poast" href="https://www.thepoast.com" target="_blank">The Poast</a>
  </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
  <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">
    Privacy Policy
  </a>
  <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noopener noreferrer">
    Terms of Service
  </a>
  </div>
  <div className="footer-social">
  <a href="https://x.com/shilll" target="_blank" rel="noopener noreferrer">
    <img src={x} alt="X (formerly Twitter)" />
  </a>
  <a href="https://linkedin.com/company/signore" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" />
  </a>
  <a href="mailto:chris@shilll.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</div>
    </div>
  );
}
