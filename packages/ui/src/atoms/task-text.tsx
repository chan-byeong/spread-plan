interface TaskTextProps {
  children: React.ReactNode;
}

export const TaskText = ({ children }: TaskTextProps) => {
  return (
    <span className='text-texticon-onstandard-highemphasis text-caption-400'>
      {children}
    </span>
  );
};
