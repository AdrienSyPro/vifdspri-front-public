'use client'

import './style.css';
import NavMobile from './NavMobile';
import Image from 'next/image';

export default function HeaderMobile() {
  return (
    <header>
      <NavMobile />
      <div className="flex justify-center items-center">
        <Image alt="Profile picture " className="rounded-full w-40 m-5" src="/profile_picture.jpeg" width={160} height={160} />
      </div>
    </header>
  );
}