import { Box, Heading } from "@chakra-ui/react";
import useTimer from "../Hooks/useTimer";

const Timer = () => {
  // const showTimer = useTimer(3000)
  const showTimer = useTimer(5000);

  return (
    <>
      {showTimer && (
        <Box>
          <Heading>Timer 1</Heading>
        </Box>
      )}
    </>
  );
};

export default Timer;
