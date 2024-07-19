import '@assets/globals.css';

export interface Props {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="border-custom rounded-lg p-5 duration-700 w-1/2 bg-white hover:scale-110">
      {children}
    </div>
  );
}