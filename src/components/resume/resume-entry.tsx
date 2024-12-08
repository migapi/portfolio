interface ResumeEntryProps {
  prop: {
    company: string;
    title: string;
    dates: string;
    skills: string[];
  };
}

const ResumeEntry: React.FC<ResumeEntryProps> = ({ prop }) => {
  return (
    <div className="space-y-24">
      <article className="bg-opacity-40 bg-sky-100 text-base md:text-3xl flex flex-col justify-between rounded-lg p-2 md:p-10 border-dashed border-2 border-sky-100">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="font-bold">{prop.company}</span>
            <span>{prop.title}</span>
          </div>
          <span className="text-xs md:text-3xl text-right">{prop.dates}</span>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          {prop.skills.map((skill) => (
            <span className="bg-white text-sm md:text-lg text-sky-700 py-2 px-4 border-dashed border-2 border-sky-500 rounded-full bg-sky-50">
              {skill}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ResumeEntry;
