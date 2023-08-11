import React from 'react'
import styles from "./header.module.css"
import tesla_logo from "../images/menu_item/tesla_black.png"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head_logo}>
        <a href='/'>
          <img src={tesla_logo} alt='Tesla'></img>
        </a>
      </div>
      <div className={styles.center_nav}>
        <ul>
          <li><a href='/'>vehicle</a></li>
          <li><a href='/'>energy</a></li>
          <li><a href='/'>charging</a></li>
          <li><a href='/'>discover</a></li>
          <li><a href='/'>shop</a></li>
        </ul>
      </div>
      <div className={styles.right_nav}>
        <ul>
          <li><a href='/'>help</a></li>
          <li><a href='/'>earth</a></li>
          <li><a href='/'>account</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header