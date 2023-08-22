import styles from "./sidebar.module.css";

export default function Sidebar({ setShowSidebar }) {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.sidebar}>
          <button onClick={() => setShowSidebar(false)}>x</button>
          <ul className={styles.list}>
            <li>Vehicles</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Discover</li>
            <li>Shop</li>
            <li>Support</li>
            <li>Account</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
