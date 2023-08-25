import tesla_logo from "../images/menu_item/tesla_black.png";
import { useState, useEffect } from "react";
import "./header.css"

export default function Header({ setShowSidebar }) {
  const [navbar, setNavbar] = useState(false);
  const [hide, setHide] = useState(false);

  let nav = document.getElementById('nav')

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 50 && window.scrollY < 500) {
        setHide(true)
        setNavbar(false)
      }
      else if (window.scrollY >= 300){
        setHide(false)
        setNavbar(true)
      }
      else {
        setHide(false)
        setNavbar(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const names = [navbar ? 'navbar active' : 'navbar', hide ? 'navbar hide' : 'navbar'].join(' ')
  return (
    <>
      <div id="nav" className={names}>
        <div className="head_logo">
          <a href="/">
            <img src={tesla_logo} alt="Tesla"></img>
          </a>
        </div>
        <div className="center_nav">
          <ul>
            <li>
              <a href="model_3">Model 3</a>
            </li>
            <li>
              <a href="model_s">Model S</a>
            </li>
            <li>
              <a href="model_x">Model X</a>
            </li>
            <li>
              <a href="cybertruck">Cyber Truck</a>
            </li>
          </ul>
        </div>
        <div className="right_nav">
          <ul>
            <li>
              <button>
                <a href="/">account</a>
              </button>
            </li>
            <li>
              <button onClick={() => setShowSidebar(true)}>menu</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

