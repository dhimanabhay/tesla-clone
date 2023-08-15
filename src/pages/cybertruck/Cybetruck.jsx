import React from 'react'
import Header from "../../components/header/Header"
import styles from "./cybertruck.module.css"

const Cybetruck = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
      <div>Cybetruck</div>
    </>
	
  )
}

export default Cybetruck