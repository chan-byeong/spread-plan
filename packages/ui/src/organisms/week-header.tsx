const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const WeekHeader = () => {
  return (
    <div className='flex gap-2'>
      {WEEKDAYS.map((day) => (
        <div
          key={day}
          className='flex-1 text-texticon-onstandard-highemphasis text-body-sm-600 text-end px-1'
        >
          {day}
        </div>
      ))}
    </div>
  );
};
