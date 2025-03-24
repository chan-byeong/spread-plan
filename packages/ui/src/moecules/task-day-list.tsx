import React from "react";
/**
 * children으로는 CalTask 컴포넌트를 받아야한다.
 */
export const TaskDayList = ({
  childrenArray,
}: {
  childrenArray: React.ReactNode[];
}) => {
  return (
    <ul className='flex flex-col'>
      {childrenArray.length > 4
        ? childrenArray.slice(0, 4).map((child, index) => (
            <li key={index} className='flex flex-col gap-2'>
              {child}
            </li>
          ))
        : childrenArray.map((child, index) => (
            <li key={index} className='flex flex-col gap-2'>
              {child}
            </li>
          ))}
    </ul>
  );
};
