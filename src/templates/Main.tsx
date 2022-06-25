import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export type Themes = {
  classy: string;
  pulse: string;
  cherry: string;
};

export const themes: Themes = {
  classy: 'classy',
  pulse: 'pulse',
  cherry: 'cherry',
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}
    <div className="content flex w-full font-inter text-xl font-thin">
      {props.children}
    </div>
    <div className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
    </div>
  </div>
);

export { Main };
