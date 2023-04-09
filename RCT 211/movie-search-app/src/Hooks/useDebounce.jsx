import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  //   console.log(debounceValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
