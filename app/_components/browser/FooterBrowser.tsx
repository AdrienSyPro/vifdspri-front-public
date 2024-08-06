import Image from "next/image";

export default function FooterBrowser() {
  return (
    <div className="grid grid-cols-12">
      <Image alt="Symfony framework image" className="w-28" src="/symfony.png" width={160} height={160} />
      <Image alt="React image" className="w-28" src="/react.png" width={160} height={160} />
      <Image alt="Next.js image" className="w-28" src="/nextjs.png" width={160} height={160} />
      <Image alt="Vue.js image" className="w-28" src="/vuejs.png" width={160} height={160} />
      <Image alt="Rust programming language image" className="w-28" src="/rust_logo.svg" width={160} height={160} />
    </div>
  );
}