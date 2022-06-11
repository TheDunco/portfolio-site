import cn from 'classnames';
import Link from 'next/link';

export interface TabProps {
  href: string;
  label: string;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({ href, label, className }) => {
  return (
    <li className="mr-6">
      <Link href={href}>
        <a
          className={
            (cn('border-none text-gray-700 hover:text-gray-900'), className)
          }
        >
          {label}
        </a>
      </Link>
    </li>
  );
};
