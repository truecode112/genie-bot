import { MutableRefObject, useEffect } from 'react';

const useOutsideAlerter = (ref: MutableRefObject<null | HTMLDivElement>, callback: () => void): void => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
};

export default useOutsideAlerter;
