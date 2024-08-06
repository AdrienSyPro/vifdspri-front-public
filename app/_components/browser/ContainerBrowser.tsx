import FooterBrowser from "./FooterBrowser";
import HeaderBrowser from "./HeaderBrowser";
import NavBrowser from "./NavBrowser";

export interface Props {
  children: React.ReactNode;
}

export default function ContainerBrowser({ children }: Props) {
  return (
    <>
      <header>
        <HeaderBrowser />
      </header>

      <nav>
        <NavBrowser />
      </nav>
      
      <main>
        {children}
      </main>

      <footer>
        <FooterBrowser />
      </footer>
    </>
  );
}