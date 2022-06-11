import cn from 'classnames';

export interface ButtonProps {
  clickEvent?: () => void;
  label: string;
  className?: string;
  disabled?: boolean;
  center?: boolean;
  loading?: boolean;
}

export const flatButtonClasses =
  'bg-slate-500 px-2 py-1 cursor-pointer rounded-md select-none text-neutral-100 hover:bg-slate-600 active:bg-slate-700';

export const FlatButton: React.FC<ButtonProps> = ({
  label,
  className,
  clickEvent,
  disabled,
  center,
  loading,
}) => {
  return (
    <div className={cn(center ? 'flex justify-center align-middle' : '')}>
      <button
        className={cn(
          flatButtonClasses,
          className,
          loading ? 'animate-pulse' : ''
        )}
        onClick={clickEvent}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};
