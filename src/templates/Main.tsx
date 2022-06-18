import { Tabs } from '@mantine/core';
import type { ReactNode } from 'react';
import { MessageCircle, Photo, Settings } from 'tabler-icons-react';

import About from '@/page-components/about';
import Portfolio from '@/page-components/portfolio';
import Sandbox from '@/page-components/sandbox';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>

        <Tabs>
          <Tabs.Tab label="Portfolio" icon={<Photo size={14} />}>
            <Portfolio />
          </Tabs.Tab>
          <Tabs.Tab label="About" icon={<MessageCircle size={14} />}>
            <About />
          </Tabs.Tab>
          <Tabs.Tab label="Sandbox" icon={<Settings size={14} />}>
            <Sandbox />
          </Tabs.Tab>
        </Tabs>
      </div>

      <div className="content py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      </div>
    </div>
  </div>
);

export { Main };
