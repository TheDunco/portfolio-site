import cn from 'classnames';

import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter';
import type { ThemesEnum } from '@/templates/Main';

export interface ThemeButtonProps {
  className?: string;
  theme: ThemesEnum;
  click: () => void;
}

export const templateStyles = '';

export const ThemeButton: React.FC<ThemeButtonProps> = ({
  className,
  theme,
  click,
}) => {
  return (
    <button
      className={cn(className, templateStyles, '')}
      onClick={() => click()}
    >
      {capitalizeFirstLetter(theme)}
    </button>
  );
};
