// src/pages/About.jsx
import { useEffect } from "react";

import logo from "../assets/img/shilll.png";
import linkedin from "../assets/img/in.png";
import x from "../assets/img/x.png";
import email from "../assets/img/email.png";

export default function About() {
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
  <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content-aboutus2">
        <h4>Coming soon.</h4>
      </div>
  </div>
  );
}
