import { useLocalStorage } from '@mantine/hooks';
import cn from 'classnames';
import { Carousel, Dropdown } from 'flowbite-react';
import { useState } from 'react';

import { ThemeButton } from '@/components/Buttons/ThemeSelectButton';
import {
  CTimelineBody,
  CTimelineEntry,
  CTimelineHeader,
  CTimelineTime,
  CustomTimeline,
} from '@/components/CustomTimeline/CustomTimeline';
import { stringConstants } from '@/lib/stringConstants';
import { ThemesEnum } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const flexSyles = 'flex flex-1 grow flex-col justify-start';
const textStyles = 'text-sm text-color-text';
const localStorageThemeEntry = 'color-scheme';
const defaultTheme = ThemesEnum.CLASSY;

interface ParenProps {
  text: string;
  className?: string;
}

const Parenthetical: React.FC<ParenProps> = ({ text, className }) => {
  return (
    <>
      {' '}
      <span
        className={cn('text-sm font-light text-color-secondary', className)}
      >
        ({text})
      </span>
    </>
  );
};

const Portfolio = () => {
  const [theme, setTheme] = useLocalStorage({
    key: localStorageThemeEntry,
    defaultValue: defaultTheme,
  });
  const [fontStyles, setFontStyles] = useState('font-theme-font');

  return (
    <>
      <div
        data-theme={theme}
        className={cn(
          flexSyles,
          textStyles,
          fontStyles,
          'scroll-smooth bg-color-bg align-middle text-lg'
        )}
      >
        <header>
          {' '}
          <div className="flex justify-end bg-color-primary py-5 pr-10">
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
                <ThemeButton
                  theme={ThemesEnum.CLASSY}
                  click={() => {
                    setTheme(ThemesEnum.CLASSY);
                    setFontStyles('font-roboto-slab');
                  }}
                ></ThemeButton>
              </Dropdown.Item>
              <Dropdown.Item>
                <ThemeButton
                  theme={ThemesEnum.CHERRY}
                  click={() => {
                    setTheme(ThemesEnum.CHERRY);
                    setFontStyles('font-inter');
                  }}
                ></ThemeButton>
              </Dropdown.Item>
              <Dropdown.Item>
                <ThemeButton
                  click={() => setTheme(ThemesEnum.PULSE)}
                  theme={ThemesEnum.PULSE}
                ></ThemeButton>
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
            <li>🚁 Drones</li>
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
            <CTimelineHeader>🎓 South Christian High School </CTimelineHeader>
            <CTimelineTime>
              <span>2014-2018</span>
              <div className="-mb-1 mt-1 font-light opacity-70"> 3.95 GPA</div>
            </CTimelineTime>
            <CTimelineBody>
              {' '}
              Took many shop classes, engineering classes, and had my first
              exposure to Python
            </CTimelineBody>
          </CTimelineEntry>
          <CTimelineEntry>
            <CTimelineHeader>🚐 Midway RV Center </CTimelineHeader>
            <CTimelineTime>2016-2020</CTimelineTime>
            <CTimelineBody>
              {' '}
              No code here, but I learned the art of detailing, how to work and
              with a variety of diverse coworkers, and other essential life
              skills
            </CTimelineBody>
          </CTimelineEntry>
          <CTimelineEntry>
            <CTimelineHeader>🎓 Calvin University</CTimelineHeader>
            <CTimelineTime>
              {' '}
              <span>2018-2022</span>
              <div className="-mb-1 mt-1 font-light opacity-70">
                {' '}
                Magna Cum Laude
              </div>
            </CTimelineTime>
            <CTimelineBody>
              {' '}
              Many much code here.
              <div className="h-64 xl:h-80 2xl:h-96">
                <Carousel slide={false}>
                  <div className="flex h-full flex-col items-start justify-start bg-color-bg text-color-text">
                    <div className="ml-10 mt-5">
                      <h1>Freshman Year</h1>
                      <ol className="ml-10 list-disc">
                        <li>
                          Intro To Computing + Lab
                          <Parenthetical text={'Python'} />
                        </li>
                        <li>
                          Intro To Data Structures + Lab
                          <Parenthetical text={'C++'} />
                        </li>
                        <li>
                          Helped start the Calvin Mars Rover Design Team as the
                          Programming Team Lead
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="flex h-full flex-col items-start justify-start bg-color-bg text-color-text">
                    <div className="ml-10 mt-5">
                      <h1>Sophomore Year</h1>
                      <ol className="m-0 ml-10 mb-0 list-disc">
                        <li>Intro Computing Seminar</li>
                        <li>
                          Intro To Computer Architecture + Lab
                          <Parenthetical text={'C, Assembly'} />
                        </li>
                        <li>
                          Data Structures & Algorithms
                          <Parenthetical text={'C#'} />
                        </li>
                        <li>
                          Programming Language Concepts + Lab
                          <Parenthetical text={'Java, Ruby, Clojure, Ada'} />
                        </li>
                        <li>Continued as co-lead of CMRDT programming team</li>
                      </ol>
                    </div>
                  </div>
                  <div className="flex h-full flex-col items-start justify-start bg-color-bg text-color-text">
                    <div className="ml-10 mt-5">
                      <h1>Junior Year</h1>
                      <ol className="m-0 ml-10 mb-0 list-disc">
                        <li>
                          Web Development! Final Project:{' '}
                          <a
                            href="https://github.com/TheDunco/character-sheet"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            5e Character Sheet
                          </a>
                          <Parenthetical text={'Angular'} />
                        </li>
                        <li>Computing Seminar</li>
                        <li>
                          Software Engineering + Lab
                          <Parenthetical text={'React Native'} />
                        </li>
                        <li>
                          Operating Systems & Networking
                          <Parenthetical text={'C, Java'} />
                        </li>
                        <li>
                          Embedded Systems and the IoT
                          <Parenthetical text={'Python, Arduino'} />
                        </li>
                        <li>
                          Statistics <Parenthetical text={'R'} />
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="flex h-full flex-col items-start justify-start bg-color-bg text-color-text">
                    <div className="ml-10 mt-5">
                      <h1>Senior Year</h1>
                      <ol className="m-0 ml-10 mb-0 list-disc">
                        <li>Computing Seminar</li>
                        <li>Advanced Computer Networks</li>
                        <li>
                          High Performance Computing
                          <Parenthetical text={'C'} />
                        </li>
                        <li>
                          Senior Project in Computing {''}
                          <a
                            href="https://github.com/Inertia-Printers/InertiaPrintersWebsite"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Inertia Printers Project Website
                          </a>
                          <Parenthetical text={'Angular'} />
                        </li>
                        <li>Computer Security</li>
                        <li>
                          Artificial Intelligence{' '}
                          <Parenthetical text={'Audit'} />
                        </li>
                      </ol>
                    </div>
                  </div>
                </Carousel>
              </div>
            </CTimelineBody>
          </CTimelineEntry>
          <CTimelineEntry>
            <CTimelineHeader>
              <span className="mr-2 text-lg">💾</span> Watershed Technologies
              LLC
            </CTimelineHeader>
            <CTimelineTime>
              2020-2022
              <div className="-mb-1 mt-1 font-light opacity-70">
                {' '}
                Embedded Systems Software Developer
              </div>
            </CTimelineTime>
            <CTimelineBody>
              <ol className="list-disc">
                Worked under an Embedded Systems Engineering contractor (my
                soon-to-be father in law) to build embedded systems for a
                variety of real world customers.
                <li className="ml-10">
                  Developed many front-end C# applications for desktop and
                  mobile using Windows and Xamarin Forms respectively and
                  interfaced with custom hardware using a custom communication
                  protocol.
                </li>
                <li className="ml-10">
                  These applications included many methods of user interaction
                  and data-visualization.
                </li>
                <li className="ml-10">
                  Worked on a summer project to build an RC airplane capable of
                  autonomous flight
                </li>
              </ol>
            </CTimelineBody>
          </CTimelineEntry>
          <CTimelineEntry>
            <CTimelineHeader>🛠 Tekton Inc </CTimelineHeader>
            <CTimelineTime>
              2022-Present{' '}
              <div className="-mb-1 mt-1 font-light opacity-70">
                {' '}
                Software Developer{' '}
                <Parenthetical className="text-base" text={'Ecommerce'} />
              </div>
            </CTimelineTime>
            <CTimelineBody>
              {' '}
              Full stack ecommerce software developer utilizing a modern tech
              stack to build and maintain a production website for a local
              business, delivering thousands of hand tools to a loyal base of
              customers.
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
