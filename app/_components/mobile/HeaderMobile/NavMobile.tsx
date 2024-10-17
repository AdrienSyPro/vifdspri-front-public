'use client'

import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import usePageDisplayContext from "@/app/_hooks/mobile/usePageDisplayContext";

export default function NavMobile() {
  const { pageDisplayContext: { isDisplayMenu }, setPageDisplayContext } = usePageDisplayContext();

  const handleClickBurgerMenu = () => {
    setPageDisplayContext({ isMainBlur: !isDisplayMenu, isDisplayMenu: !isDisplayMenu });
  }
  
  return (
      <div className="fixed top-0 w-11/12 flex z-10">
        {isDisplayMenu && (
          <nav className="w-10/12 bg-black h-screen p-8 text-white">
          <ul className="space-y-6">
            <li className="text-xl font-semibold hover:text-indigo-400 transition-colors duration-300">
              <a href="/experiences">Mon parcours</a>
            </li>
            <li className="text-xl font-semibold hover:text-indigo-400 transition-colors duration-300">
              Les outils WEB que je maîtrise
            </li>
          </ul>
        </nav>
        )}

        <BurgerMenu absolute={!isDisplayMenu} handleClickBurgerMenu={handleClickBurgerMenu} />
      </div>
  );
}