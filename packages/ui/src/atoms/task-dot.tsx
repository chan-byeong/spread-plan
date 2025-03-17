interface TaskDotProps {
  color?: "yr" | "y" | "gy" | "b" | "pb";
}

const colorMap = {
  yr: "bg-task-point-yr-500",
  y: "bg-task-point-y-500",
  gy: "bg-task-point-gy-500",
  b: "bg-task-point-b-500",
  pb: "bg-task-point-pb-500",
} as const;

export const TaskDot = ({ color }: TaskDotProps) => {
  const dotColor = color ?? "b";
  return (
    <div className={`w-[6px] h-[6px] rounded-full ${colorMap[dotColor]}`} />
  );
};
