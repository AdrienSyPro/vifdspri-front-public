import TextBlock from '@/app/_components/TextBlock';
import { websiteContent } from '@/app/_data/websiteContent';
import './page.css';

export default function Page() {
  return (
    <>
      <TextBlock>
        {websiteContent.presentation}
      </TextBlock>

      <TextBlock classes='vif-title-block'>
        <h2 className="text-center font-bold">
          Adaptabilité, Autonomie, Engagement
        </h2>
      </TextBlock>

      <TextBlock>
        {websiteContent.presentation}
      </TextBlock>


      <TextBlock>
        {websiteContent.presentation}
      </TextBlock>
    </>
  );
}
