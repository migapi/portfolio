import GithubIcon from "./icons/github-icon";
import LinkedinIcon from "./icons/linkedin-icon";
import MailIcon from "./icons/mail-icon";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="h-screen w-screen flex flex-col pl-20 pr-32 pt-28 font-mono space-y-16"
    >
      <h1 className="text-5xl pb-16 font-bold">Contact</h1>
      <p className="text-2xl pb-14">Feel free to reach out to me!</p>
      <div className="flex space-x-10">
        <MailIcon />
        <LinkedinIcon />
        <GithubIcon />
      </div>
    </div>
  );
};

export default Contact;
