import './style.css';
import NavMobile from '../NavMobile';

export default function HeaderMobile() {
  return (
    <>
      <NavMobile />
      <div className="flex justify-center items-center">
        <img className="rounded-full w-40 m-5" src="/profile_picture.jpeg" />
      </div>
    </>
  );
}