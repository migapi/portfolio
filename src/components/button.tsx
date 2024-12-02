export default function Button(props: { text: string; href: string }) {
  const { text, href } = props;
  return (
    <button className="hover:bg-sky-900 hover:text-white font-poppins py-2 px-4 rounded-full">
      <a href={href}>{text}</a>
    </button>
  );
}
