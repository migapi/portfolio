export default function Button(props: { text: string; href: string }) {
  const { text, href } = props;
  return (
    <button className="text-lg text-sky-700 hover:bg-sky-100 hover:text-blue-950 font-bold py-2 px-4 rounded-full z-10">
      <a href={href}>{text}</a>
    </button>
  );
}
