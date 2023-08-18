import React, { useEffect } from 'react'
import "./Backdrop.css"

function Backdrop({onClick}) {

  useEffect(() => {
    const contentEl = document.querySelector('#root');
    contentEl.classList.add('blur-content');
    return () => {
      contentEl.classList.remove('blur-content');
    };
  }, [])

  return <div className="backdrop" onClick={onClick}></div>;
}

export default Backdrop