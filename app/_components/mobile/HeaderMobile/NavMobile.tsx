'use client'

import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import usePageDisplayContext from "@/app/_hooks/mobile/usePageDisplayContext";

export default function NavMobile() {
  const { pageDisplayContext: { isDisplayMenu }, setPageDisplayContext } = usePageDisplayContext();

  const handleClickBurgerMenu = () => {
    setPageDisplayContext({ isMainBlur: !isDisplayMenu, isDisplayMenu: !isDisplayMenu });
  }

  const handleClickLink = () => setPageDisplayContext({ isMainBlur: false, isDisplayMenu: false });
  
  return (
      <div className="fixed top-0 w-11/12 flex z-10">
        {isDisplayMenu && (
          <nav className="w-10/12 bg-black h-screen p-8 text-white">
          <ul className="space-y-6">
            <li className="text-xl font-semibold hover:text-indigo-400 transition-colors duration-300">
              <Link
                href="/experiences"
                onClick={handleClickLink}
              >
                Mon parcours
              </Link>
            </li>
            <li className="text-xl font-semibold hover:text-indigo-400 transition-colors duration-300">
              <Link
                href="/web-technologies"
                onClick={handleClickLink}
              >
                Les technologies WEB que je maîtrise
              </Link>
            </li>
          </ul>
        </nav>
        )}

        <BurgerMenu absolute={!isDisplayMenu} handleClickBurgerMenu={handleClickBurgerMenu} />
      </div>
  );
}