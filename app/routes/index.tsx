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
      <div className="inner-content">
      <div className="text">
         <p>We're rolling out the red carpet</p>
         <p>Earn more as a driver doing premium rides in a luxury car.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          {/* <input type="text" name="name" placeholder="Enter Your Name" /> */}
          <p><input className="email" type="email" name="email" required placeholder="Enter your email 🚗" /></p>
          <p><input className="submit" type="submit" value="Apply to drive" /></p>
          <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="816a7" type="hidden" name="l" checked value="816a7657-c4f6-4124-b611-418fdf43be49" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      <video src={vid} autoPlay loop muted playsInline className="vid" />
      </div>
  );
}