import { useEffect } from "react"
import { useRef } from "react"

function useThrottle(cb, delay) {
    const id = useRef(false)
    useEffect(() => {
        if (!id.current) {
            id.current = true
            setTimeout(() => {
                cb()
                id.current = false
            }, delay);
        }
    }, [delay, cb])
    // console.log(id)
}
export default useThrottle