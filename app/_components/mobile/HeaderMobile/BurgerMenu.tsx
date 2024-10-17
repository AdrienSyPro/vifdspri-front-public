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
        "flex flex-col justify-center items-center w-1/6 h-12 sm:w-12 sm:h-12 rounded-br-lg shadow-lg cursor-pointer transition-all duration-300",
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