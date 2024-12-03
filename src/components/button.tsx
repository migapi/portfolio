export default function Button(props: { text: string; href: string }) {
  const { text, href } = props;
  return (
    <button className="text-lg hover:bg-blue-900 hover:text-white font-poppins py-2 px-4 rounded-full z-10">
      <a href={href}>{text}</a>
    </button>
  );
}
