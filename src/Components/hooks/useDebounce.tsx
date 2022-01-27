import {useEffect, useRef} from "react";


export const useDebounce = (func:any, delay: number, cleanUp: boolean = false) => {

    const timeRef = useRef<ReturnType<typeof setTimeout> | undefined>();

    function clearTimer() {
        if (timeRef.current) {
            // @ts-ignore
            clearTimer(timeRef.current);
            timeRef.current = undefined;
        }
    }

    useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

    return(...args:any) => {
        clearTimer();
        timeRef.current = setTimeout(() => func(...args), delay);
    }
};