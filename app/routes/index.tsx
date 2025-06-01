import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import logo from "~/../public/img/ja4.png";
import vid from "~/../public/img/WebBack.mp4";
import social1 from "~/../public/img/ja5.png";
import ss1 from "~/../public/img/stock/stock-1.jpeg";
import ss2 from "~/../public/img/stock/stock-4.jpg";
import ss3 from "~/../public/img/stock/stock-5.webp";
import ss4 from "~/../public/img/stock/stock-6.jpg";
import ss5 from "~/../public/img/stock/stock-7.jpg";
import ss6 from "~/../public/img/stock/stock-8.jpg";
import ss7 from "~/../public/img/stock/stock-10.png";
import ss8 from "~/../public/img/stock/stock-11.jpg";
import ss9 from "~/../public/img/stock/stock-13.jpg";
import ss10 from "~/../public/img/stock/stock-14.jpg";
import ss11 from "~/../public/img/stock/stock-15.jpeg";
import ss13 from "~/../public/img/stock/stock-17.webp";
import ss14 from "~/../public/img/stock/stock-18.jpg";
import ss15 from "~/../public/img/stock/stock.jpg";
import ss16 from "~/../public/img/stock/1.jpg";
import ss17 from "~/../public/img/stock/2.jpg";
import ss18 from "~/../public/img/stock/3.jpg";
import ss19 from "~/../public/img/stock/4.jpg";



const rotatingWords = ["idea machine", "podcast host", "startup founder", "solo artist", "one to watch", "big thing"]

export default function Index() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300); // match animation-out duration
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
      <video autoPlay loop muted playsInline className="vid" preload="none">
        <source src={vid} type="video/mp4" />
      </video>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="inner-content">
        <div className="text">
          <h4>CUSTOMIZABLE BIO LINK</h4>
          <h1>
            Be the next <br /><span className={`${fadeOut ? "fade-out" : "fade-in"}`}>{rotatingWords[index]}</span>
          </h1>
          <p>Create a customizable bio link to Shilll everything you do on the internet in a single link. Add clickable posts that turn your link into a lead magnet machine that converts traffic from Instagram, TikTok, and other social media apps.</p>
        </div>
    <form
      method="post"
      action="https://app.jeffamzn.com/subscription/form"
      target="_blank"
    >
      <div className="input-wrapper">
        <input
          className="email"
          type="email"
          name="email"
          required
          placeholder="Social Media Profile *"
        />
        <button className="submit" type="submit">
          Create your Shilll
        </button>
      </div>

      <input
        type="hidden"
        name="l"
        value="99104eca-ebad-4185-b0d7-dc6821d41d60"
      />
      <input type="hidden" name="nonce" />
    </form>
      </div>
      <div className="inner-content2">
        <h2>Turn your <span>free bio link</span> into a lead magnet machine</h2>
            <p>Create a free bio link to Shilll everything you do on the internet in a single link. Add clickable posts of content that help you convert traffic from Instagram, TikTok and other social media profiles.</p>
      </div>
    <div className="inner-content3">
        <div className="box">
          <img src={ss5} />
        </div>
        <div className="box">
          <img src={ss14} />
        </div>
        <div className="box">
          <img src={ss13} />
        </div>
      </div>
      <div className="inner-content4">
            <h3>Create the one place you call home.</h3>
            <p>Your Shilll link in bio organizes everything you do on the internet into a single link you can share anywhere.</p>
      </div>
      <div className="inner-content5">
        <div className="box">
          <img src={ss3} />
          <h1>Convert traffic where it counts</h1>
          <p>Link your social profiles, online store, website, and any content you want to share.</p>
        </div>
        <div className="box">
          <img src={ss11} />
          <h1>Customize your link in bio</h1>
          <p>Customize your link in bio with clickable posts of content your audience can subscribe to via email, SMS, or WhatsApp.</p>
        </div>
        <div className="box">
          <img src={ss4} />
          <h1>Grow your Shilll</h1>
          <p>Make it easy for people to subscribe to your Shilll by sharing your URLs everywhere.</p>
        </div>
      </div>
      <div className="inner-content6">
        <Link to="/pricing" className="pricebtn">
            Create your Shilll
      </Link>
        </div>
        <div className="inner-content7">
            <div className="text">
            <h4>CUSTOMIZABLE LINK IN BIO</h4>
            <h3>Your brand. Your Shilll. Customized Your Way.</h3>
            </div>
            <p>Your brand is not a link — it's an experience. Add clickable posts with different types of content to better understand what your audience is actually interested in.</p>
      </div>
      <div className="inner-content8">
            <img src={ss9} />
      </div>
      <div className="inner-content9">
        <div className="box">
          <img src={ss16} />
          <h1>Create clickable posts</h1>
          <p>Create clickable posts with different types of content to engage different types of people.</p>
        </div>
        <div className="box">
          <img src={ss19} />
          <h1>Share clickable posts</h1>
          <p>Share your clickable posts across Instagram, TikTok, and other social media profiles.</p>
        </div>
        <div className="box">
          <img src={ss1} />
          <h1>Build your magnet</h1>
          <p>Turn your link in bio into a lead magnet machine that boosts engagement, drives clicks, and converts traffic from Instagram, TikTok, and other social media apps.</p>
        </div>
      </div>
        <div className="inner-content10">
        <div className="header">
            <h4>OWN YOUR AUDIENCE</h4>
            <h3>Grow your audience with a lead magnet machine that collects contacts for you.</h3>
        </div>
        <div className="grid">
        <div className="box">
          <img src={ss8} />
          <h1>Collect contacts of all kinds</h1>
          <p>Shilll is a powerful tool to collect contacts through clickable posts of content that act as a lead magnet machine. Add contact forms, capture email, SMS, or WhatsApp signups, and stay connected with your followers beyond Instagram, TikTok, and other social media profiles.</p>
        </div>
        <div className="box">
          <img src={ss15} />
          <h1>Grow your link in bio with clickable posts</h1>
          <p>Make your link in bio convert with clickable posts of new, or previously posted content. Create a thread of clickable posts to boost engagement, drive clicks, and collect contacts.</p>
        </div>
        </div>
      </div>
      <div className="inner-content11">
        <div className="header">
            <h4>GET PAID FROM YOUR LINK IN BIO</h4>
            <h3>Monetize your link in bio, your way.</h3>
        </div>
        <div className="grid">
        <div className="box">
          <img src={ss10} />
          <h1>Grow your clickable posts</h1>
          <p>Grow clickable posts into threads that become a massive lead magnet machine within your link in bio.</p>
        </div>
        </div>
      </div>
        <div className="inner-content12">
        <div className="header">
            <h4>LINK IN BIO FEATURES</h4>
            <h3>Get more growth with Shilll.</h3>
        </div>
        <div className="grid">
        <div className="box">
          <img src={ss17} />
          <h1>Get more growth</h1>
          <p>Manage all your links, convert social media traffic and grow your brand with Shilll's link in bio. Collect leads, sell products, and engage your audience directly with one powerful, customizable link.</p>
        </div>
        <div className="box">
          <img src={ss6} />
          <h1>Customize your feed</h1>
          <p>Create a thread of clickable posts that showcase content, product, and ideas you vibe with. Collect contacts, advertise (almost) anything, and own your audience with Shilll's link in bio tool.</p>
        </div>
        </div>
      </div>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-links">
          <div className="column">
            <h4>Company</h4>
            <Link to="#">About</Link>
            <Link to="#">What's New</Link>
            <Link to="#">Affiliates</Link>
            <Link to="#">Press</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Link in bio</Link>
          </div>
          <div className="column">
            <h4>Community</h4>
            <Link to="#">Shilll for Enterprise</Link>
            <Link to="#">Enterprise Case Studies</Link>
            <Link to="#">Trending</Link>
            <Link to="#">Creator Directory</Link>
            <Link to="#">Explore Templates</Link>
          </div>
          <div className="column">
            <h4>Support</h4>
            <Link to="#">Help Topics</Link>
            <Link to="#">Getting Started</Link>
            <Link to="#">Features & How-Tos</Link>
            <Link to="#">FAQs</Link>
            <Link to="#">Report a Violation</Link>
          </div>
          <div className="column">
            <h4>Shilll</h4>
            <Link to="#">Get started for free</Link>
            <Link to="#">Log in</Link>
            <Link to="#">Case Studies</Link>
            <Link to="#">Service Status</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-meta">

          <Link to="#">Terms of Service</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
        <div className="footer-social">
          <a href="#"><img src={social1} alt="X" /></a>
          <a href="#"><img src={social1} alt="YouTube" /></a>
          <a href="#"><img src={social1} alt="LinkedIn" /></a>
          <a href="#"><img src={social1} alt="Email" /></a>
        </div>
      </div>
    </footer>
   </div>
  );
}
