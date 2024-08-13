'use client'

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
          <ul className="w-10/12 bg-black h-screen nav">
            <li>Mon parcours</li>
            <li>Les outils WEB que je maîtrise</li>
            <li>Ma vision du développement logiciel</li>
            <li>Mon approche quand je suis en mission</li>
            <li>Mes ouvrages de référence</li>
            <li>Mes hobbies</li>
            <li>Mes objectifs</li>
          </ul>
        )}

        <BurgerMenu absolute={!isDisplayMenu} handleClickBurgerMenu={handleClickBurgerMenu} />
      </div>
  );
}