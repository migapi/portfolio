const Resume: React.FC = () => {
  return (
    <div
      id="resume"
      className="h-screen w-screen flex flex-col pl-20 pr-32 pt-24 font-serif space-y-32"
    >
      <h1 className="text-5xl font-bold">Resume</h1>
      {/*first resume entry*/}
      <article className="text-3xl flex justify-between rounded-lg bg-blue-100 border-dotted border-2 border-white">
        <span className="font-bold">Microsoft</span>
        <span>Software Engineer</span>
        <span>October 2022 - October 2023</span>
      </article>
      {/*second resume entry*/}
      <article className="text-3xl flex justify-between ring-offset-2 ring-2">
        <span className="font-bold">Microsoft</span>
        <span>Software Engineering Intern</span>
        <span>May 2021 - July 2021</span>
      </article>
      {/*third resume entry*/}
      <article className="text-3xl flex justify-between">
        <span className="font-bold">Microsoft</span>
        <span>Explore Intern</span>
        <span>May 2021 - July 2021</span>
      </article>
    </div>
  );
};

export default Resume;
