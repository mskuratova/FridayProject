import {useEffect, useRef, useState} from "react";


export const useDebounce = (value: boolean, delay: number) => {
    const [done, setDone] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDone(true);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [done]);

    return done;

    // const timeRef = useRef<ReturnType<typeof setTimeout> | undefined>();
    //
    // function clearTimer() {
    //     if (timeRef.current) {
    //         clearTimer(timeRef.current);
    //         timeRef.current = undefined;
    //     }
    // }
    //
    // useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);
    //
    // return(...args:any) => {
    //     clearTimer();
    //     timeRef.current = setTimeout(() => func(...args), delay);
    // }
};