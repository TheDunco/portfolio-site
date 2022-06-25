import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

export type Themes = {
    classy: string;
    cherry: string;
    pulse: string;
};

export const themes: Themes = {
    classy: 'classy',
    cherry: 'cherry',
    pulse: 'pulse',
};

const Main = (props: IMainProps) => (
    <div className="w-full antialiased">
        {props.meta}
        <div className="content flex w-full font-inter text-xl font-thin">
            {props.children}
        </div>

    </div>
);

export { Main };
