import React from "react";

import { CalDate } from "../atoms/cal-date";
import { TaskDayList } from "../moecules/task-day-list";

interface CalDayProps {
  day: number;
  isToday?: boolean;
  isWeekend?: boolean;
  isSelected?: boolean;
  isNotThisMonth?: boolean;
  children: React.ReactNode;
}
/**
 * children으로는 CalTask 컴포넌트를 받아야한다.
 */
export const CalDay = ({
  day,
  isToday = false,
  isWeekend = false,
  isNotThisMonth = false,
  children,
}: CalDayProps) => {
  const weekend = isWeekend
    ? "bg-surface-standard-container-50"
    : "bg-transparent";
  const childrenArray = React.Children.toArray(children) as React.ReactNode[];

  return (
    <div
      className={`p-1 rounded-md ${weekend} border border-border-standard-lowemphasis h-full min-w-[120px] min-h-[120px] max-w-[156px] max-h-[136px] overflow-hidden`}
    >
      <div className='flex justify-end items-center mb-2'>
        <CalDate day={day} isToday={isToday} isNotThisMonth={isNotThisMonth} />
      </div>

      <TaskDayList childrenArray={childrenArray} />

      {childrenArray.length > 4 && (
        <div className='flex justify-end items-center self-end'>
          <p className='text-caption-400 text-texticon-onstandard-highemphasis'>
            {childrenArray.length - 4}개의 계획 더보기
          </p>
        </div>
      )}
    </div>
  );
};
