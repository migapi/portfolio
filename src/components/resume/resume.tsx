import ResumeEntry from "./resume-entry";

const Resume: React.FC = () => {
  return (
    <div
      id="resume"
      className="min-h-screen w-screen flex flex-col pl-20 pr-32 pt-20 pb-20 space-y-16"
    >
      <h1 className="text-5xl font-bold">Resume</h1>
      <ResumeEntry
        prop={{
          company: "Microsoft",
          title: "Software Engineer",
          dates: "October 2022 - October 2023",
          skills: ["Azure", "Apache Spark", "Scala", "C#", ".NET"],
        }}
      />
      <ResumeEntry
        prop={{
          company: "Microsoft",
          title: "Software Engineering Intern",
          dates: "May 2021 - July 2021",
          skills: [
            "C#",
            ".NET",
            "Azure Functions",
            "Azure Blob Storage",
            "Azure Service Bus",
          ],
        }}
      />
      <ResumeEntry
        prop={{
          company: "Microsoft",
          title: "Explore Intern",
          dates: "May 2020 - July 2020",
          skills: ["C#", ".NET", "Azure", "HTML", "CSS", "JavaScript"],
        }}
      />
    </div>
  );
};

export default Resume;
