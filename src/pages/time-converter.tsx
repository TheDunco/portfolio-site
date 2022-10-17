import { useRef, useState } from "react";
import { Check } from "tabler-icons-react";

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
    const dateRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center align-center">
            <span className="flex flex-row gap-5 mb-3">
                <h1 className="text-4xl font-monsterrat font-bold">
                    {date.toISOString()}
                </h1>
                <button
                    className="bg-slate-900 text-white rounded-lg p-2 px-3 w-fit self-center"
                    onClick={() => {
                        window.navigator.clipboard.writeText(
                            date.toISOString()
                        );
                        setHide(false);
                        setTimeout(() => {
                            setHide(true);
                        }, 5000);
                    }}
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
            </span>
            <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(dateRef.current?.value);
                    console.log(timeRef.current?.value);
                    const newDate = new Date(
                        dateRef.current?.value + " " + timeRef.current?.value
                    );
                    try {
                        if (newDate.toISOString()) {
                            setDate(newDate);
                        }
                    } catch {}
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
                <button className="bg-slate-900 text-white rounded-lg p-2 px-3 w-fit self-center mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Sandbox;
