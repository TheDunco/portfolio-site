import { useRef, useState } from 'react';
import { Check } from 'tabler-icons-react';

export const getStaticProps = () => {
  return {
    props: {
      date: new Date().toString(),
    },
  };
};

export const Sandbox: React.FC<{ date: Date }> = ({ date: staticDate }) => {
  const [hide, setHide] = useState(true);
  const [date, setDate] = useState(new Date(staticDate) || new Date());
  const [error, setError] = useState('');

  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const timezoneRef = useRef<HTMLInputElement>(null);

  const copyOnClick = () => {
    window.navigator.clipboard.writeText(date.toISOString());
    setHide(false);
    setTimeout(() => {
      setHide(true);
    }, 5000);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center align-middle">
      <div className="mb-3 flex flex-col">
        <h1 className="font-monsterrat text-2xl font-bold md:text-4xl">
          {date.toISOString()}
        </h1>
        <button
          onClick={copyOnClick}
          className="w-fit self-center rounded-lg bg-slate-900 p-2 px-3 text-white"
        >
          {hide ? (
            <>Copy</>
          ) : (
            <span className="flex flex-row whitespace-nowrap text-emerald-300">
              <Check />
              Copied to Clipboard!
            </span>
          )}
        </button>
      </div>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const newDate = new Date(
            dateRef.current?.value +
              ' ' +
              timeRef.current?.value +
              ' ' +
              timezoneRef.current?.value
          );
          try {
            if (newDate.toISOString()) {
              setDate(newDate);
            } else {
              throw new Error('Invalid Date');
            }
          } catch (err) {
            if (err instanceof Error) {
              setError(err.message);
            }
          }
        }}
      >
        <div>
          <label htmlFor="date">Date: </label>
          <input ref={dateRef} type="date" id="date" name="date" />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input ref={timeRef} type="Time" id="time" name="time" />
        </div>
        <div>
          <label htmlFor="timezone">Zone: </label>
          <input
            ref={timezoneRef}
            type="Timezone"
            id="timezone"
            name="timezone"
            className="h-10 w-32 rounded-none border border-[#a0aec0] px-3"
          />
        </div>
        <button
          onClick={copyOnClick}
          className="mt-3 w-fit self-center rounded-lg bg-slate-900 p-2 px-3 text-white"
        >
          Submit
        </button>
        <div>
          {error && <p className="w-full text-center text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Sandbox;
