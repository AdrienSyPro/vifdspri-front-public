import Link from "next/link";

export default function NavBrowser() {
  const linkClass = "rounded-full p-5 hover:bg-black hover:text-white transform transition duration-300 font-medium";
  return (
    <nav className="lg:text-xl shadow-md">
      <h1 className="text-2xl absolute mt-5 ml-10">
        <Link href="/">ADRIEN SY</Link>
      </h1>
      <div className="flex justify-center items-center h-16">
        <div className="hidden sm:-my-px sm:flex sm:space-x-8">
          <Link href="/experiences" className={linkClass}>
            Mon parcours
          </Link>
          <Link href="/web-technologies" className={linkClass}>
            Les outils WEB que je maîtrise
          </Link>
        </div>
      </div>
    </nav>
  );
}