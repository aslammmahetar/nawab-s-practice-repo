import React, { useEffect, useRef, useState } from "react";

const useThrottle = (value, interval) => {
  const [throttleVal, setThrottleVal] = useState(value);
  const lastExicution = useRef(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExicution.current + interval) {
      lastExicution.current = Date.now();
      setThrottleVal(value);
    } else {
      const handlerId = setTimeout(() => {
        lastExicution.current = Date.now();
        setThrottleVal(value);
      }, interval);
      return () => clearTimeout(handlerId);
    }
  }, [value, interval]);

  return throttleVal;
};

export default useThrottle;
