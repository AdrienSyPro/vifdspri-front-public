import clsx from "clsx";
import usePageDisplayContext from "@/app/_hooks/mobile/usePageDisplayContext";

interface Props {
  children: React.ReactNode;
}

export default function MainMobile({ children }: Props) {
  const { pageDisplayContext, setPageDisplayContext } = usePageDisplayContext();
  const isMainBlur = pageDisplayContext?.isMainBlur ?? false;

  return (
    <main className={clsx({
      'blur-sm': isMainBlur
    })}>
      {children}
    </main>
  );
}