import catImage from "../assets/images/cat.png";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="h-screen w-screen relative border-b-4 border-white"
    >
      <p className="text-2xl mt-2 font-serif pt-12">
        Hi! My name is Milana. I am a software engineer with interest in backend
        development and computer graphics.
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
