import NavBrowser from "./NavBrowser";

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

      <footer>
      </footer>
    </>
  );
}