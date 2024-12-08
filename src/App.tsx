import React from "react";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Resume from "./components/resume/resume";
import Contact from "./components/contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="snap-start h-screen">
          <Home />
        </div>
        <div className="snap-start h-screen">
          <Resume />
        </div>
        <div className="snap-start h-screen">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
