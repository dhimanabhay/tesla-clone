import black_tesla_logo from "../images/menu_item/tesla_black.png";
import white_tesla_logo from "../images/menu_item/tesla_white.png";
import { useState, useEffect } from "react";
import "./header.css"

export default function Header({ setShowSidebar }) {
  const [navbar, setNavbar] = useState(false);
  const [hide, setHide] = useState(false);
  const [active_text, setActiveText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50 && window.scrollY < 500) {
        setHide(true)
        setNavbar(false)
        setActiveText(false)
      }
      else if (window.scrollY >= 300){
        setHide(false)
        setNavbar(true)
        setActiveText(true)
      }
      else {
        setHide(false)
        setNavbar(false)
        setActiveText(false)
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
            <img src={navbar ? white_tesla_logo : black_tesla_logo} alt="Tesla"></img>
          </a>
        </div>
        <div className="center_nav">
          <ul>
            <li>
              <a className={active_text ? 'active_text' : ''} href="model_3">Model 3</a>
            </li>
            <li>
              <a className={active_text ? 'active_text' : ''} href="model_s">Model S</a>
            </li>
            <li>
              <a className={active_text ? 'active_text' : ''} href="model_x">Model X</a>
            </li>
            <li>
              <a className={active_text ? 'active_text' : ''} href="cybertruck">Cyber Truck</a>
            </li>
          </ul>
        </div>
        <div className="right_nav">
          <ul>
            <li>
              <button>
                <a className={active_text ? 'active_text' : ''} href="/">account</a>
              </button>
            </li>
            <li>
              <button className={active_text ? 'active_text' : ''} onClick={() => setShowSidebar(true)}>menu</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

