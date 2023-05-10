import Sidebar from "../component/sidebar";

import React, { useState } from 'react';

const Backoffice = () => {
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
      setSideBar(!sideBar);
    };
  
    return (
      <section className="flex">
        <nav
          className={`bg-gray-800 text-white w-60 min-h-screen transition-all duration-300 ease-in-out ${
            sideBar ? 'ml-0' : '-ml-60'
          }`}
        >
          {/* Contenu de la barre de navigation */}
          <nav className="flex flex-col py-4">
            {/* Liens de navigation */}
            {/* ... */}
          </nav>
          <button
            className="fixed top-4 left-4 bg-gray-700 px-4 py-2 rounded text-white focus:outline-none"
            onClick={toggleSideBar}
          >
            {sideBar ? 'Close' : 'Open'} Menu
          </button>
        </nav>
        <div className="ml-60 transition-all md:ml-0">
          {/* Contenu principal de l'application */}
        </div>
      </section>
    );
  };
export default Backoffice