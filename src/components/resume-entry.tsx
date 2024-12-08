interface ResumeEntryProps {
  entries: {
    company: string;
    title: string;
    dates: string;
  }[];
}

const ResumeEntry: React.FC<ResumeEntryProps> = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <article className="text-3xl flex justify-between rounded-lg bg-blue-100 p-6 border-dotted border-2 border-white">
          <span className="font-bold">{entry.company}</span>
          <span>{entry.title}</span>
          <span>{entry.dates}</span>
        </article>
      ))}
    </div>
  );
};

export default ResumeEntry;
