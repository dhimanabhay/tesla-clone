import React from 'react'
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head_logo}>
        Logo
      </div>
      <div className={styles.center_nav}>
        <ul>
          <li>vehicle</li>
          <li>energy</li>
          <li>charging</li>
          <li>discover</li>
          <li>shop</li>
        </ul>
      </div>
      <div className={styles.right_nav}>
        <ul>
          <li>help</li>
          <li>earth</li>
          <li>account</li>
        </ul>
      </div>
    </div>
  )
}

export default Header