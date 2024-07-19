import clsx from "clsx"
import BurgerMenuLine from "./BurgerMenuLine"

export interface Props {
  handleClickBurgerMenu: () => void,
  absolute: boolean
}

export default function BurgerMenu({ absolute, handleClickBurgerMenu }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-1/6 h-14 rounded-br-lg nav burger-menu",
        {
          "absolute": absolute
        }
      )}
      onClick={handleClickBurgerMenu}
    >
      <BurgerMenuLine />
      <BurgerMenuLine />
      <BurgerMenuLine />
    </div>
  )
}