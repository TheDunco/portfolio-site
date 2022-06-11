export interface RepeatProps {
  children: React.ReactNode;
  times: number;
}

export const Repeat: React.FC<RepeatProps> = ({ children, times }) => {
  return (
    <>
      {' '}
      {[...Array(times)].map((key) => (
        <div key={key}>{children}</div>
      ))}
    </>
  );
};
