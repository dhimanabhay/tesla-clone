import styles from "./header.module.css";
import tesla_logo from "../images/menu_item/tesla_black.png";

//2:40:00 / 5:07:57

export default function Header({setShowSidebar, Color}){

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
              <a style={{ color: Color }} href="model_3">Model 3</a>
            </li>
            <li>
              <a style={{ color: Color }} href="model_s">Model S</a>
            </li>
            <li>
              <a style={{ color: Color }} href="model_x">Model X</a>
            </li>
            <li>
              <a style={{ color: Color }} href="cybertruck">Cyber Truck</a>
            </li>
          </ul>
        </div>
        <div className={styles.right_nav}>
          <ul>
            <li>
              <button>
                <a style={{ color: Color }} href="/">account</a>
              </button>
            </li>
            <li>
              <button style={{ color: Color }} onClick={() => setShowSidebar(true)}>menu</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

