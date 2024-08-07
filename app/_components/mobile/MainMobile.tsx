import clsx from "clsx";
import usePageDisplayContext from "@/app/_hooks/mobile/usePageDisplayContext";

interface Props {
  children: React.ReactNode;
}

export default function MainMobile({ children }: Props) {
  const { pageDisplayContext: { isMainBlur }, setPageDisplayContext } = usePageDisplayContext();

  return (
    <main className={clsx({
      'blur-sm': isMainBlur
    })}>
      {children}
    </main>
  );
}