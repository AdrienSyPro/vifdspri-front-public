import TextBlock from '@/app/_components/TextBlock';
import { websiteContent } from '@/app/_data/websiteContent';
import './page.css';
import Image from 'next/image';
import Card from '@components/mobile/Card';

export default function Page() {
  return (
    <>
      <TextBlock>
        <div className="flex justify-center items-center">
          <Image
            alt="Profile picture"
            className="rounded-full w-40 m-5 shadow-lg"
            src="/profile_picture.jpeg"
            width={160}
            height={160}
          />
        </div>
      </TextBlock>

      <TextBlock>
        <em>{websiteContent.presentation}</em>
      </TextBlock>

      <div className="container mx-auto p-6">
      
        <h2 className="text-3xl font-bold text-center mb-8">Programming Languages</h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card title="Symfony">
            <img alt="Symfony framework" className="w-38 h-16 mx-auto" src="/symfony.png" width={160} height={160} />
          </Card>
          
          <Card title="React">
            <img alt="React" className="mx-auto w-16 h-16" src="/react.png" width={160} height={160} />
          </Card>
          
          <Card title="Next.js">
            <img alt="Next.js" className="mx-auto w-22 h-16" src="/nextjs.png" width={160} height={160} />
          </Card>
          
          <Card title="Vue.js">
            <img alt="Vue.js" className="mx-auto h-16" src="/vuejs.png" width={160} height={160} />
          </Card>
          
          <Card title="Rust">
            <img alt="Rust programming language" className="mx-auto w-16 h-16" src="/rust_logo.svg" width={160} height={160} />
          </Card>
        </div>
      </div>
    </>
  );
}
