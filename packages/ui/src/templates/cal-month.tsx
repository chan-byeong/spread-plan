import { CalDay } from "../organisms/cal-day";
import { CalTask } from "../moecules/cal-task";
import { WeekHeader } from "../organisms/week-header";
interface CalMonthProps {
  year: number;
  month: number;
  tasks?: {
    [key: string]: {
      color: "yr" | "y" | "gy" | "b" | "pb";
      text: string;
      bg?: "yr" | "y" | "gy" | "b" | "pb";
    }[];
  };
  onNextMonth?: () => void;
  onPrevMonth?: () => void;
}

export const CalMonth = ({
  year,
  month,
  tasks = {},
  onNextMonth,
  onPrevMonth,
}: CalMonthProps) => {
  // 현재 달의 첫 날과 마지막 날
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  // 이전 달의 마지막 날
  const prevMonthLastDay = new Date(year, month - 1, 0);

  const startingDay = firstDay.getDay();
  const totalDays = lastDay.getDate();
  const prevMonthDays = prevMonthLastDay.getDate();

  const weeks: { day: number; isNotThisMonth: boolean }[][] = [];
  let currentWeek: { day: number; isNotThisMonth: boolean }[] = [];

  // 이전 달의 날짜들로 첫 주를 채웁니다
  for (let i = 0; i < startingDay; i++) {
    currentWeek.push({
      day: prevMonthDays - startingDay + i + 1,
      isNotThisMonth: true,
    });
  }

  // 현재 달의 날짜들을 주 단위로 나눕니다
  for (let day = 1; day <= totalDays; day++) {
    currentWeek.push({
      day,
      isNotThisMonth: false,
    });
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // 다음 달의 날짜들로 마지막 주를 채웁니다
  let nextMonthDay = 1;
  while (currentWeek.length < 7) {
    currentWeek.push({
      day: nextMonthDay,
      isNotThisMonth: true,
    });
    nextMonthDay++;
  }
  weeks.push(currentWeek);

  // 현재 날짜와 비교하기 위한 Date 객체
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDate();

  return (
    <div className='flex flex-col gap-2 h-full'>
      {/* 월 표시 및 네비게이션 */}
      <div className='flex justify-between items-center mb-2'>
        <button
          onClick={onPrevMonth}
          className='p-2 text-texticon-onstandard-highemphasis hover:bg-surface-standard-container-50 rounded-md'
        >
          이전 달
        </button>
        <h2 className='text-title-600 text-texticon-onstandard-highemphasis'>
          {year}년 {month}월
        </h2>
        <button
          onClick={onNextMonth}
          className='p-2 text-texticon-onstandard-highemphasis hover:bg-surface-standard-container-50 rounded-md'
        >
          다음 달
        </button>
      </div>

      <WeekHeader />

      {/* 날짜 그리드 */}
      <div className='flex flex-col gap-2 flex-1'>
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className='flex gap-2 flex-1'>
            {week.map(({ day, isNotThisMonth }, dayIndex) => {
              const isWeekend = dayIndex === 0 || dayIndex === 6;
              const isToday =
                !isNotThisMonth &&
                day === currentDate &&
                month === currentMonth &&
                year === currentYear;

              return (
                <div key={`${weekIndex}-${dayIndex}`} className='flex-1'>
                  <CalDay
                    day={day}
                    isToday={isToday}
                    isWeekend={isWeekend}
                    isNotThisMonth={isNotThisMonth}
                  >
                    {!isNotThisMonth &&
                      tasks[`${year}-${month}-${day}`]?.map(
                        (task, taskIndex) => (
                          <CalTask
                            key={taskIndex}
                            color={task.color}
                            bg={task.bg}
                          >
                            {task.text}
                          </CalTask>
                        )
                      )}
                  </CalDay>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
