import styles from "./header.module.css";
import tesla_logo from "../images/menu_item/tesla_black.png";

//2:30:00 / 5:07:57

export default function Header({setShowSidebar}){

  return (
    <>
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

