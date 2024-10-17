interface Props {
  yearStart: string,
  yearEnd: string,
  duration: string,
  isBackgroundBlack?: boolean | undefined
}

export default function ExperienceDuration({
  yearStart,
  yearEnd,
  duration,
  isBackgroundBlack = false
}: Props) {
  const colors = isBackgroundBlack ? 'bg-white text-black' : 'bg-black text-white';
  return (
    <div className="flex flex-col mr-6 justify-between items-center">
      <div className={`${colors} p-2 rounded-lg`}>{yearEnd}</div>
      <div className={`${colors} w-1 h-full p-1`}></div>
      <div className={`${colors} p-2 rounded-lg`}>{duration}</div>
      <div className={`${colors} w-1 h-full p-1`}></div>
      <div className={`${colors} p-2 rounded-lg`}>{yearStart}</div>
    </div>
  );
}