import { useState } from "react";
import { CalMonth } from "@spread_plan/ui";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  return (
    <CalMonth
      year={currentDate.getFullYear()}
      month={currentDate.getMonth() + 1}
      onNextMonth={handleNextMonth}
      onPrevMonth={handlePrevMonth}
      tasks={
        {
          // 태스크 데이터
        }
      }
    />
  );
};
