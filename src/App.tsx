import React from "react";

import catImage from "./assets/images/cat.png";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home" className="h-screen w-screen relative">
          <img
            className="absolute bottom-0 right-0 w-35 h-35 max-w-full max-h-full z-0"
            src={catImage}
            alt="catImage"
          />
        </div>
        <div id="about" className="h-screen w-screen">
          <h1 className="text-3xl font-poppins">About Me</h1>
          <p className="mt-2 font-poppins">
            Welcome to my portfolio! I’m excited to showcase my projects and
            skills.
          </p>
        </div>
        <div id="projects" className="h-screen w-screen">
          <h1 className="text-3xl font-poppins">Resume</h1>
          {/*first resume entry*/}
          <div className="float-left mt-10 font-poppins pr-10">
            Microsoft, Software Engineer
          </div>
          <div className="float-left mt-10 font-poppins">
            October 2022 - October 2023
          </div>
          {/*second resume entry*/}
          <div className="float-left mt-10 font-poppins pr-10">
            Microsoft, Software Engineering Intern
          </div>
          <div className="float-left mt-10 font-poppins">
            May 2021 - July 2021
          </div>
          {/*third resume entry*/}
          <div className="float-left mt-10 font-poppins pr-10">
            Microsoft, Software Engineer
          </div>
          <div className="float-left mt-10 font-poppins">
            October 2022 - October 2023
          </div>
        </div>

        <div id="contact" className="h-screen w-screen">
          <h1 className="text-3xl font-poppins">Contact</h1>
          <p className="mt-2 font-poppins">
            Feel free to reach out to me anytime!
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
