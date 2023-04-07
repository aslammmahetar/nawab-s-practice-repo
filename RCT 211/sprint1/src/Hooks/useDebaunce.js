import { useRef } from "react";
import { useEffect } from "react";

function useDebounce(cb, delay) {
    const id = useRef()
    useEffect(() => {
        id.current && clearTimeout(id.current)
        id.current = setTimeout(() => {
            cb()
        }, delay);
    }, [delay, cb])
}
export default useDebounce