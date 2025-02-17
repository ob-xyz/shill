import { useEffect } from "react";
import logo from "~/../public/img/ja.png";
import vid from "~/../public/img/vid.mp4";

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
      <img src={logo} />
      <div className="line"></div>
        <h1>Wanna know more?</h1>
        <div className="line"></div>
        <div className="inner-content">
        <form method="post" action="https://app.jeffamzn.com/subscription/form">
            <p><input className="email" type="email" name="email" required placeholder="Enter your email" /></p>
            <p><input className="submit" type="submit" value="Subscribe" /></p>
            <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
            <input id="3a575" type="hidden" name="l" checked value="3a575627-dc5a-4d06-b627-05ca13da2e85" />
            <input type="hidden" name="nonce" />
        </form>
        </div>
      </div>
  );
}