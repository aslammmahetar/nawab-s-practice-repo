import React from "react";

const useTimer = (delay) => {
  const [showTimer, setShowTimer] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowTimer(true);
    }, delay);
  }, []);

  return showTimer
};

export default useTimer;
