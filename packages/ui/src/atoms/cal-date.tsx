interface CalDateProps {
  day: number;
  isToday: boolean;
  isNotThisMonth?: boolean;
}

export const CalDate = ({ day, isToday, isNotThisMonth }: CalDateProps) => {
  const dayTextColor = isToday
    ? "text-texticon-onstandard-invert text-caption-600"
    : isNotThisMonth
    ? "text-texticon-onstandard-lowemphasis text-caption-400"
    : "text-texticon-onstandard-highemphasis text-caption-400";

  const dayBgColor = isToday ? "bg-surface-brand-sub" : "bg-transparent";
  return (
    <p
      className={`w-7 h-5 flex items-center justify-center rounded-sm ${dayTextColor} ${dayBgColor}`}
    >
      {day}
    </p>
  );
};
