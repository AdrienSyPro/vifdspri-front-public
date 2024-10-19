import Image from "next/image";
import NavBrowser from "./NavBrowser";
import { imageLoader } from "@/app/_utils/imageLoader";
import Link from "next/link";

export interface Props {
  children: React.ReactNode;
}

export default function ContainerBrowser({ children }: Props) {
  return (
    <>
      <NavBrowser />
      
      <main>
        {children}
      </main>

      <footer className="flex flex-col mb-5 justify-center items-center">
        <h2 className="w-full text-2xl p-2 mb-5 text-white bg-black rounded-full font-bold text-center">Connect with Me</h2>
        <div className="flex justify-center items-center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/adrien-sy-541a4488/"
            className="mr-10"
          >
            <Image
              src="LinkedIn.png"
              loader={imageLoader}
              alt="LinkedIn link"
              className="w-14 h-14"
              width={160} height={160}
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AdrienSyPro"
          >
            <Image
              alt="GitHub link"
              src="/github.png"
              className="w-14 h-14"
              width={160} height={160} 
            />
          </Link>
        </div>
      </footer>
    </>
  );
}