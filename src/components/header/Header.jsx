import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

import styles from "./header.module.css";
import tesla_logo from "../images/menu_item/tesla_black.png";
import Backdrop from "../backdrop/Backdrop";

// const headerElements =[
//   { label: 'TESLA', route: '/'},
//   { label: 'Model 3', route: 'model_3'},
//   { label: 'Model S', route: 'model_s'},
//   { label: 'Model X', route: 'model_x'},
//   { label: 'Menu', route: null},
// ]

//1:18:55 / 5:07:57

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar && (
        <>
          <Backdrop onClick={() => setShowSidebar(false)} />
        </>
      )}

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className={styles.container}>
        <div className={styles.head_logo}>
          <a href="/">
            <img src={tesla_logo} alt="Tesla"></img>
          </a>
        </div>
        <div className={styles.center_nav}>
          <ul>
            <li>
              <a href="model_3">Model 3</a>
            </li>
            <li>
              <a href="model_3">Model S</a>
            </li>
            <li>
              <a href="model_x">Model X</a>
            </li>
            <li>
              <a href="cybertruck">Cyber Truck</a>
            </li>
          </ul>
          {/* <ul>
          {
            headerElements.map(({label, route}) => (
              <li key={label}><a href={route}>{label}</a></li>
            ))
          }
        </ul> */}
        </div>
        <div className={styles.right_nav}>
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

export default Header;
