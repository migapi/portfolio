import React from "react";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Resume from "./components/resume/resume";
import Contact from "./components/contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="snap-y snap-mandatory overflow-y-scroll">
        <div className="snap-start">
          <Home />
        </div>
        <div className="snap-start">
          <Resume />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
