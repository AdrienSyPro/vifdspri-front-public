import clsx from "clsx";
import usePageDisplayContext from "@/app/_hooks/mobile/usePageDisplayContext";
import Link from "next/link";
import Image from "next/image";

interface ImageLoaderProps {
  src: any;
  width: any;
  quality?: number | undefined;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/${src}`;
}

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