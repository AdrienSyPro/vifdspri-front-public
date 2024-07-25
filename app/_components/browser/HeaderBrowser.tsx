'use client'

import Tooltip from "./Tooltip";

export default function HeaderBrowser() {
  return (
    <Tooltip>
      <a href="/">
        <img className="rounded-full w-40 m-5 hover:scale-110	duration-300" src="/profile_picture.jpeg" />
      </a>
    </Tooltip>
  );
}