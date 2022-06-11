import cn from 'classnames';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverable?: boolean;
}

export const cardStyles = 'bg-slate-50 shadow-md rounded-lg p-6 m-3';

export const Card: React.FC<CardProps> = ({
  className,
  children,
  hoverable,
}) => {
  return (
    <div
      data-uk-parallax="{bg: '-200'}"
      className={cn(
        className,
        cardStyles,
        hoverable ? 'hover:shadow-lg translate-y-2' : ''
      )}
    >
      {children}
    </div>
  );
};
