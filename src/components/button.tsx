export default function Button(props: { text: string; href: string }) {
  const { text, href } = props;
  return (
    <button className="text-lg hover:bg-gradient-to-r hover:from-rose-200 hover:to-orange-200 hover:text-rose-400 font-serif font-bold py-2 px-4 rounded-full z-10">
      <a href={href}>{text}</a>
    </button>
  );
}
