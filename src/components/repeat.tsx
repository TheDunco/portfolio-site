import { Map } from './map';

export interface RepeatProps {
  children: React.ReactNode;
  times: number;
}

export const Repeat: React.FC<RepeatProps> = ({ children, times }) => {
  return (
    <>
      <Map array={[...Array(times)]}>{children}</Map>
    </>
  );
};
