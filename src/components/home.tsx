import catImage from "../assets/images/cat.png";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="h-screen w-screen relative border-b-4 border-blue-950 flex items-center"
    >
      <p className="text-3xl mt-2 font-serif pb-24 pl-20">
        <span className="font-bold">
          Hi! <br />
        </span>
        My name is Milana. <br />I am a software engineer with interest in
        backend development. <br /> I also enjoy computer graphics!
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
