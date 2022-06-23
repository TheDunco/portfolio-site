import cn from 'classnames';

export interface ClassnameProp {
  className?: string;
}

export interface ChildrenProp {
  children: React.ReactNode;
}

export interface TextProp {
  text: string;
}

export const CustomTimeline: React.FC<ClassnameProp & ChildrenProp> = ({
  className,
  children,
}) => {
  return (
    <ol
      id="custom"
      className={cn(
        className,
        'relative border-l border-color-special m-5 ml-10'
      )}
    >
      {children}
    </ol>
  );
};

export const CTimelineSvg: React.FC = () => {
  return (
    <svg
      className="h-3 w-3 text-color-text"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const CTimelineChip: React.FC<TextProp> = ({ text }) => {
  return (
    <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
      {text}
    </span>
  );
};

export const CTimelineHeader: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
      {children}{' '}
    </h3>
  );
};

export const CTimelineTime: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {children}
    </time>
  );
};

export const CTimelineBody: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {children}
    </p>
  );
};

export const CTimelineEntry: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
        <CTimelineSvg />
      </span>
      {children}
    </li>
  );
};
