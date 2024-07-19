import { useState } from "react";
import BurgerMenu from "./HeaderMobile/BurgerMenu";

export default function NavMobile() {
  const [isDisplayMenu, setIsDisplayMenu] = useState(true);
  
  const handleClickBurgerMenu = () => {
    setIsDisplayMenu(!isDisplayMenu);
  }

  return (
      <div className="fixed top-0 w-11/12 flex z-10">
        {isDisplayMenu && <div className="w-10/12 bg-black h-screen nav">NAV mobile</div>}
        <BurgerMenu absolute={!isDisplayMenu} handleClickBurgerMenu={handleClickBurgerMenu} />
      </div>
  );
}