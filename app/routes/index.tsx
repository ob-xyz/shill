import { useEffect } from "react";
import logo from "~/../public/img/ja.png";

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
        <img src={logo} />
      </div>
      <div className="inner-content">
      <div className="line"></div>
      <div className="text">
      <p>JUST A PRIVATE TECHNOLOGY COMPANY.</p>
      </div>
      <div className="line"></div>
        <form method="post" action="https://app.jeffamzn.com/subscription/form">
            <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
            <p><input className="submit" type="submit" value="Get in touch" /></p>
            <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
            <input id="90054" type="hidden" name="l" checked value="900546ea-120f-412d-8fd1-b64b07c8c26c" />
            <input type="hidden" name="nonce" />
        </form>
      </div>
      </div>
  );
}