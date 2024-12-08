import catImage from "../assets/images/cat.png";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="h-screen w-screen relative flex items-center bg-sky-100"
    >
      <p className="text-2xl mt-2 text-sky-700 font-mono pb-24 pl-20">
        <span className="font-bold"></span>
        Hi! <br />
        My name is
        <span className="font-bold text-5xl"> Milana</span>
        . <br />I am a
        <span className="font-bold text-4xl"> software engineer</span> with a
        focus on backend development. <br /> I also enjoy computer graphics!
      </p>
      <img
        className="absolute bottom-0 right-0 w-35 h-35 max-w-full max-h-full z-0"
        src={catImage}
        alt="catImage"
      />
    </div>
  );
};

export default Home;
