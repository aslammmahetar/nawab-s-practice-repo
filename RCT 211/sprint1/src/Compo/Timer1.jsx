import { Box, Heading } from "@chakra-ui/react";

import useTimer from "../Hooks/useTimer";

const Timer1 = () => {
  const showTimer = useTimer(8000);

  return (
    <>
      {showTimer && (
        <Box>
          <Heading>Timer 2</Heading>
        </Box>
      )}
    </>
  );
};

export default Timer1;
