export interface MapProps {
  array: any[];
  className?: string;
}

export const Map: React.FC<MapProps> = ({ array, className }) => {
  return (
    <>
      {' '}
      {array.map((key) => (
        <div key={key} className={className}>
          {key}
        </div>
      ))}
    </>
  );
};
