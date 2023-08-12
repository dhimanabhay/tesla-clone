import React from 'react'
import styles from "./header.module.css"
import tesla_logo from "../images/menu_item/tesla_black.png"

const headerElements =[
  { label: 'TESLA', route: '/'},
  { label: 'Model 3', route: 'model_3'},
  { label: 'Model S', route: 'model_s'},
  { label: 'Model X', route: 'model_x'},
]

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
          <li><a href='model_3'>Model 3</a></li>
          <li><a href='model_3'>Model S</a></li>
          <li><a href='model_x'>Model X</a></li>
          <li><a href='cybertruck'>Cyber Truck</a></li>
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