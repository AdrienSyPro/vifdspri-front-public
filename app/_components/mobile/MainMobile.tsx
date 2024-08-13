import clsx from "clsx";
import usePageDisplayContext from "@/app/_hooks/mobile/usePageDisplayContext";
import Image from "next/image";

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
      <div className="flex justify-center items-center">
        <Image alt="Profile picture " className="rounded-full w-40 m-5" src="/profile_picture.jpeg" width={160} height={160} />
      </div>

      {children}
    </main>
  );
}