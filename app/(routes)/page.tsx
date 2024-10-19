import TextBlock from '@/app/_components/TextBlock';
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
            className="rounded-full w-40 lg:w-64 m-5 shadow-lg"
            src="/profile_picture.jpeg"
            width={160}
            height={160}
          />
        </div>
      </TextBlock>

      <TextBlock classes="lg:text-xl lg:text-center lg:rounded-full lg:p-14 lg:shadow-lg">
        <p>
          <em>
            En tant que développeur Senior, j&apos;ai pu acquérir toutes les compétences nécessaires au développement d&apos;un produit logiciel.
          </em>
        </p>
        <br/>
        <p>
          <em>
            Autonome, curieux et avec une grande capacité d&apos;adaptation, je maîtrise les concepts fondamentaux et plus avancés du WEB et du software en général, afin de pouvoir être responsable à chaque étape de création du produit et de planifier, construire et maintenir le software.
          </em>
        </p>
        <br/>
        <p>
          <em>
            Je cherche constamment à effectuer un travail de qualité en comprenant et apprenant du métier pour lequel le produit est développé, bien comprendre le besoin en utilisant les données pertinentes et avancer de manière agile.
          </em>
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          
          <Card title="Rust">
            <Image alt="Rust programming language" className="mx-auto w-16 h-16" src="/rust_logo.svg" width={160} height={160} />
          </Card>
        </div>
      </TextBlock>
    </>
  );
}
