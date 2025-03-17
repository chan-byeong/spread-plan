import { TaskDot, TaskText } from "../index";

interface CalTaskProps {
  color: "yr" | "y" | "gy" | "b" | "pb";
  children: React.ReactNode;
  bg?: "yr" | "y" | "gy" | "b" | "pb";
}

const bgMap = {
  yr: "bg-task-bg-yr-50",
  y: "bg-task-bg-y-50",
  gy: "bg-task-bg-gy-50",
  b: "bg-task-bg-b-50",
  pb: "bg-task-bg-pb-50",
  default: "bg-transparent",
} as const;

export const CalTask = ({ color, children, bg }: CalTaskProps) => {
  const bgColor = bg ?? "default";
  return (
    <div
      className={`flex items-center px-2 gap-2 h-6 w-[156px] ${bgMap[bgColor]}`}
    >
      <TaskDot color={color} />
      <TaskText>{children}</TaskText>
    </div>
  );
};
