import React from "react";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
import Contact from "./components/contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="space-y-20">
        <Home />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;
