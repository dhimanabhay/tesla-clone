import React from 'react'
import Header from "../../components/header/Header"
import styles from "./home.module.css"

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
    </>

  )
}

export default Home