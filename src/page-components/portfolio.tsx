import { range, useLocalStorage, useToggle } from '@mantine/hooks';
import cn from 'classnames';
import { Carousel, Tooltip } from 'flowbite-react';
import { useState } from 'react';
import { CaretDown, Palette } from 'tabler-icons-react';

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
const textStyles = 'text-color-text';
const localStorageThemeEntry = 'color-scheme';
const defaultTheme = ThemesEnum.CLASSY;
const liCycleStyles1 =
  'mt-5 py-2 text-xl w-[fit-content] bg-color-special rounded-lg px-2 ease-in-out transform-gpu duration-200';
const liCycleStyles2 =
  'text-xl w-[fit-content] bg-color-special rounded-lg px-2 ease-in-out transform-gpu duration-200 translate-y-1 opacity-0 h-0';
const liCycleInterval = 2000;
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

enum LiCycles {
  CODING,
  KEYBOARDS,
  HEADPHONES,
  MUSIC,
  DND,
  ANIME,
  DRONES,
  MINECRAFT,
  RL,
  SSBU,
}

const LiCyclesToText: Record<number, string> = {
  0: '👨🏼‍💻 Coding',
  1: '⌨️ Keyboards',
  2: '🎧 Headphones',
  3: '🎵 Music',
  4: '🐲 Dungeons and Dragons',
  5: '🇯🇵 Anime',
  6: '🚁 Drones',
  7: '🧱 Minecraft',
  8: '⚽️ Rocket League',
  9: '💥 Super Smash Bros (Ultimate)',
};

export const Portfolio: React.FC = () => {
  const [theme, setTheme] = useLocalStorage({
    key: localStorageThemeEntry,
    defaultValue: defaultTheme,
  });
  const [fontStyles, setFontStyles] = useState('font-theme-font');
  const [liCycle, setLiCycle] = useState(LiCycles.CODING);
  setTimeout(() => {
    if (liCycle + 1 >= LiCycles.SSBU) {
      setLiCycle(LiCycles.CODING);
    } else {
      setLiCycle(liCycle + 1);
    }
  }, liCycleInterval);

  const [themeExpandedToggle, toggleTheme] = useToggle(false, [true, false]);

  return (
    <>
      <div
        data-theme={theme}
        className={cn(
          flexSyles,
          textStyles,
          fontStyles,
          'scroll-smooth bg-color-bg align-middle md:text-lg lg:text-2xl transition-transform ease-in-out duration-200'
        )}
      >
        <header>
          <div className="flex flex-col justify-end bg-color-primary py-5">
            <button
              className="flex flex-row justify-end"
              onClick={() => {
                toggleTheme();
              }}
            >
              <span className="pt-1 pr-1 opacity-70">
                <Tooltip content="Coolers color generator">
                  <a
                    href="https://coolors.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Palette size={20} strokeWidth={2} color={'white'} />
                  </a>
                </Tooltip>
              </span>
              <span>Site Theme</span>
              <span
                className={cn(
                  'ease-in-out transform-gpu duration-200 transition-all',
                  themeExpandedToggle
                    ? 'rotate-180 mt-1 lg:mt-2'
                    : 'mb-1 lg:mt-2'
                )}
              >
                <CaretDown />
              </span>
            </button>
            <div aria-label="theme-accordion" id="theme-accordion">
              <div
                className={cn(
                  'flex flex-row justify-evenly py-1 gap-5 ease-in-out transform-gpu duration-300 transition-all',
                  themeExpandedToggle
                    ? 'block h-14'
                    : '-translate-y-20 h-0 opacity-0'
                )}
              >
                <ThemeButton
                  themeSet={setTheme}
                  theme={ThemesEnum.CLASSY}
                  fontSet={setFontStyles}
                  font="font-roboto-slab"
                />
                <ThemeButton
                  themeSet={setTheme}
                  theme={ThemesEnum.CHERRY}
                  fontSet={setFontStyles}
                  font="font-inter"
                />
              </div>
            </div>
          </div>
        </header>
        <span className="mx-10 mt-10 flex flex-row text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <div className="animate-wave">👋 </div>
          <div className="mr-3"> </div>
          <div>{stringConstants.intro}</div>
        </span>
        <div className="ml-10 text-xl">
          I&apos;m a Christian software developer who enjoys...
          <div className="">
            {range(0, 12).map((i) => (
              <div
                key={i}
                className={cn(liCycle === i ? liCycleStyles1 : liCycleStyles2)}
              >
                {LiCyclesToText[liCycle]}
              </div>
            ))}
          </div>
        </div>

        <p className="ml-10">
          My technical skills come from both a computer science degree and years
          of real world software development experience. I also fancy a custom
          project like this one occasionally.
        </p>
        <CustomTimeline className="md:text-lg">
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
            <CTimelineTime>
              <span>2016-2020</span>
              <div className="-mb-1 mt-1 font-light opacity-70"> Detailer</div>
            </CTimelineTime>
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
              <div className="h-64 lg:w-2/3">
                <Carousel slide={false}>
                  <div className="flex h-full flex-col items-start justify-start bg-color-bg text-color-text">
                    <div className="ml-10 mt-5">
                      <div className="text-lg font-semibold">Freshman Year</div>
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
                      <div className="text-lg font-semibold">
                        Sophomore Year
                      </div>
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
                      <div className="text-lg font-semibold">Junior Year</div>
                      <ol className="m-0 ml-10 mb-0 list-disc">
                        <li>
                          Web Development! Final Project:{' '}
                          <a
                            href="https://github.com/TheDunco/character-sheet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-light"
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
                      <div className="text-lg font-semibold">Senior Year</div>
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
                            className="text-base font-light"
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
