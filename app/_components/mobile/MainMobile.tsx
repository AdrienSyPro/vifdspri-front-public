import clsx from "clsx";
import usePageDisplayContext from "@/app/_hooks/mobile/usePageDisplayContext";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/app/_utils/imageLoader";

interface Props {
  children: React.ReactNode;
}

export default function MainMobile({ children }: Props) {
  const { pageDisplayContext: { isMainBlur }, setPageDisplayContext } = usePageDisplayContext();

  return (
    <main
      className={clsx({
        'blur-sm': isMainBlur
      })}
      onClick={() => setPageDisplayContext({ isMainBlur: false, isDisplayMenu: false })}
    >
      <div className="flex">
        <div className="w-1/6 h-12">
        </div>

        <div className="flex justify-center items-center space-x-4 w-5/6 h-12">
          <h1 className="text-xl text-center w-9/12"><Link href="/">ADRIEN SY</Link></h1>
          <div className="flex space-x-4 w-3/12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/adrien-sy-541a4488/"
            >
              <Image
                src="LinkedIn.png"
                loader={imageLoader}
                alt="LinkedIn link"
                className="w-5 h-5"
                width={160} height={160} 
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AdrienSyPro"
            >
              <Image
                alt="GitHub link"
                src="/github.png"
                className="w-5 h-5"
                width={160} height={160} 
              />
            </a>
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}