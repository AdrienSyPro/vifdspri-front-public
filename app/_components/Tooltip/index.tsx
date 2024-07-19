import './style.css';
import '@assets/globals.css';

export interface Props {
  children: React.ReactNode;
};

export default function Tooltip({ children }: Props) {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext w-96">
        <span className="font-bold">Bonjour !</span><br />
        Je m'appelle <strong>Adrien SY</strong> et je suis :
        <ul className="font-bold">
          <li>
            {"->"} <a className="hover:underline" href="/skills/fullstack">Développeur Web Fullstack</a>
          </li>
          <li>
          {"->"} <a className="hover:underline" href="/skills/software-engineer">Software Engineer</a>
          </li>
          <li>
          {"->"} <a className="hover:underline" href="/skills/fullstack">Back End Developer</a>
          </li>
          <li>
          {"->"} <a className="hover:underline" href="/skills/fullstack">Front End Developer</a>
          </li>
        </ul>
      </span>
    </div>
  );
}