interface Props {
  children: React.ReactNode
}

export default function TextBlock({ children }: Props) {
  return (
    <div className="border-custom background-secondary-color lg:rounded-lg	p-5 duration-700 lg:w-1/2 mb-5">
      {children}
    </div>
  );
}