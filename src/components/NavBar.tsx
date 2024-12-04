import Button from "./button";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-b from-white from-60% h-20 mx-auto px-[200px] flex justify-between items-center">
      <div className="hidden md:flex ml-auto items-center justify-between w-auto space-x-20">
        <Button text="Home" href="#home" />
        <Button text="Resume" href="#resume" />
        <Button text="Contact" href="#contact" />
      </div>
    </nav>
  );
};

export default Navbar;
