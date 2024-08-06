import Image from "next/image";
import Tooltip from "./Tooltip";

export default function HeaderBrowser() {
  return (
    <Tooltip>
      <a href="/">
        <Image alt="Profile picture" className="rounded-full w-40 m-5 hover:scale-110	duration-300" src="/profile_picture.jpeg" width={160} height={160} />
      </a>
    </Tooltip>
  );
}