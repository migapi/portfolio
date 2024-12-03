import React from "react";

import catImage from "./assets/images/cat.png";
import Navbar from "./components/navbar";
import Resume from "./components/resume";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div
          id="home"
          className="h-screen w-screen relative border-b-4 border-blue-950"
        >
          <img
            className="absolute bottom-0 right-0 w-35 h-35 max-w-full max-h-full z-0"
            src={catImage}
            alt="catImage"
          />
        </div>
        <div id="about" className="h-screen w-screen pl-10">
          <h1 className="text-4xl font-serif font-bold pt-24">About Me</h1>
          <p className="text-2xl mt-2 font-serif pt-12">
            Hi! My name is Milana. I am a software engineer with interest in
            backend development and computer graphics.
          </p>
        </div>
        <Resume />
        <div id="contact" className="h-screen w-screen">
          <h1 className="text-3xl font-roboto">Contact</h1>
          <p className="mt-2 font-roboto">
            Feel free to reach out to me anytime!
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
