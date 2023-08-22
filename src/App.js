import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Backdrop from "./components/backdrop/Backdrop";

function App({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar && (
        <>
          <Backdrop onClick={() => setShowSidebar(false)} />
          <Sidebar setShowSidebar={setShowSidebar} />
        </>
      )}
      <main className="content">
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </>
  );
}

export default App;
