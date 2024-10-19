import Card from "@/app/_components/mobile/Card";
import Image from "next/image";


export default function Page() {
  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Languages</h2>
      
        <div className="grid grid-cols-2 gap-4">
          <Card title="PHP">
            <Image alt="PHP" className="w-38 h-16 mx-auto" src="/php.png" width={160} height={160} />
          </Card>
          
          <Card title="Javascript">
            <Image alt="Javascript" className="mx-auto w-16 h-16" src="/js.png" width={160} height={160} />
          </Card>

          <Card title="HTML">
            <Image alt="HTML" className="mx-auto w-16 h-16" src="/html.png" width={160} height={160} />
          </Card>
          
          <Card title="CSS">
            <Image alt="CSS" className="mx-auto w-16 h-16" src="/css.png" width={160} height={160} />
          </Card>
          
          <Card title="Typescript">
            <Image alt="Typescript" className="mx-auto w-16 h-16" src="/typescript.png" width={160} height={160} />
          </Card>
          
          <Card title="Rust">
            <Image alt="Rust" className="mx-auto w-16 h-16" src="/rust_logo.svg" width={160} height={160} />
          </Card>
          
          <Card title="C">
            <Image alt="C" className="mx-auto w-16 h-16" src="/c_language.png" width={160} height={160} />
          </Card>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frameworks / Libraries</h2>
      
        <div className="grid grid-cols-2 gap-4">
          <Card title="Symfony">
            <Image alt="Symfony framework" className="w-38 h-16 mx-auto" src="/symfony.png" width={160} height={160} />
          </Card>
          
          <Card title="React">
            <Image alt="React" className="mx-auto w-16 h-16" src="/react.png" width={160} height={160} />
          </Card>
          
          <Card title="Next.js">
            <Image alt="Next.js" className="mx-auto w-22 h-16" src="/nextjs.png" width={160} height={160} />
          </Card>
          
          <Card title="Vue.js">
            <Image alt="Vue.js" className="mx-auto h-16" src="/vuejs.png" width={160} height={160} />
          </Card>
        </div>
      </div>
    </>
  );
}