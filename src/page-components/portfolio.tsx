import { useLocalStorage } from '@mantine/hooks';
import cn from 'classnames';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

import {
  CTimelineBody,
  CTimelineEntry,
  CTimelineHeader,
  CTimelineTime,
  CustomTimeline,
} from '@/components/CustomTimeline/CustomTimeline';
import { stringConstants } from '@/lib/stringConstants';
import { themes } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const flexSyles = 'flex flex-1 grow flex-col justify-start';
const textStyles = 'text-sm text-color-primary';
const localStorageThemeEntry = 'color-scheme;';
const defaultTheme = themes.classy;

const Portfolio = () => {
  const [theme, setTheme] = useLocalStorage({
    key: localStorageThemeEntry,
    defaultValue: defaultTheme,
  });
  const [fontStyles, setFontStyles] = useState('font-theme-font');

  // useEffect(() => {
  //     setTheme(theme);
  // }, [setTheme, theme]);

  return (
    <>
      <div
        data-theme={theme}
        className={cn(
          flexSyles,
          textStyles,
          fontStyles,
          'scroll-smooth bg-color-bg align-middle md:text-lg lg:text-xl xl:text-2xl'
        )}
      >
        <header>
          {' '}
          <div className="flex justify-end bg-color-secondary py-5 pr-10">
            <Dropdown inline={true} label="Site Theme">
              <Dropdown.Header>
                <span className="block text-sm">Set the site theme</span>
                <div className="block truncate text-sm font-medium">
                  Many created with
                  <a href="https://coolors.co/"> https://coolors.co/</a>
                </div>
                <div>Others inspired by GMK</div>
              </Dropdown.Header>
              <Dropdown.Item>
                <button
                  onClick={() => {
                    setTheme(themes.classy);
                    setFontStyles('font-roboto');
                  }}
                >
                  Classy
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button
                  onClick={() => {
                    setTheme(themes.cherry);
                    setFontStyles('font-inter');
                  }}
                >
                  Cherry
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={() => setTheme(themes.pulse)}>Pulse</button>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </header>
        <span className="mx-10 mt-10 flex flex-row text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <div className="animate-wave">👋 </div>
          <div className="mr-3"> </div>
          <div>{stringConstants.intro}</div>
        </span>
        <div className="ml-10">
          I&apos;m a Christian software developer who loves...
          <ul>
            <li>👨🏼‍💻 Coding</li>
            <li>⌨️ Keyboards</li>
            <li>🎧 Headphones</li>
            <li>🎵 Music</li>
            <li>🐲 Dungeons and Dragons</li>
            <li>🇯🇵 Anime</li>
            <ol className="ml-5 mt-0 list-disc">
              🎮 Video Games
              <li className="ml-5">Minecraft</li>
              <li className="ml-5">Rocket League</li>
              <li className="ml-5">Super Smash Bros (Ultimate)</li>
              <li className="ml-5">Titanfall 2</li>
              <li className="ml-5">Skyrim</li>
              <li className="ml-5">And many more... </li>
            </ol>
          </ul>
        </div>

        <p className="ml-10">
          My technical skills come from both a computer science degree and years
          of real world software development experience. I also fancy a custom
          project like this one occasionally.
        </p>
        <CustomTimeline>
          <CTimelineEntry>
            <CTimelineHeader>Flowbite Application UI v2.0.0 </CTimelineHeader>
            <CTimelineTime>Released on January 13th, 2022</CTimelineTime>
            <CTimelineBody>
              {' '}
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </CTimelineBody>
          </CTimelineEntry>
        </CustomTimeline>
        <div className="border-t py-8 text-center text-sm text-color-text">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
