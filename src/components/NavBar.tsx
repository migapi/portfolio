import Button from "./button";

const Navbar: React.FC = () => {
  return (
    <nav
      className="
        flex fixed w-full top-0 h-28 z-50 
        bg-gradient-to-b from-white from-60%
      "
    >
      <div className="ml-auto space-x-4 md:space-x-16 pt-6 pr-6">
        <Button text="Home" href="#home" />
        <Button text="Resume" href="#resume" />
        <Button text="Contact" href="#contact" />
      </div>
    </nav>
  );
};

export default Navbar;
