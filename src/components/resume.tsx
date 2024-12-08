import ResumeEntry from "./resume-entry";

const Resume: React.FC = () => {
  const resumeEntries = [
    {
      company: "Microsoft",
      title: "Software Engineer",
      dates: "October 2022 - October 2023",
    },
    {
      company: "Microsoft",
      title: "Software Engineering Intern",
      dates: "May 2021 - July 2021",
    },
    {
      company: "Microsoft",
      title: "Explore Intern",
      dates: "May 2020 - July 2020",
    },
  ];

  return (
    <div
      id="resume"
      className="h-screen w-screen flex flex-col pl-20 pr-32 pt-24 font-serif space-y-32"
    >
      <h1 className="text-5xl font-bold">Resume</h1>
      <ResumeEntry entries={resumeEntries} />
    </div>
  );
};

export default Resume;
