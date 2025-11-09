import { useEffect } from "react";

import logo2 from "../assets/img/shilll.png";


export default function Index() {
    useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
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
          <h4>BET YES OR NO ON ANYTHING</h4>
          <h2><span>Join Shilll to bet yes or no on anything you actually believe in.</span></h2>
            <p>The world is changing dramatically—from AI breakthroughs to Mamdani's victory in New York. Shilll helps you cut through the noise by betting on anything you actually believe in, bet yes or no on politics, sports, tech, news, entertainment, and markets.</p>
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
    </div>
  );
}
