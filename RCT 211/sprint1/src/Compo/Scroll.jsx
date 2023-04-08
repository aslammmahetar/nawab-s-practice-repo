import React, { useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import useThrottle from "../Hooks/useThrottle";
// import useDebounce from "../Hooks/useDebaunce";

const Scroll = () => {
  const [number, setNumber] = useState(0);

  const handleScroll = () => {
    setNumber((prev) => prev + 1);
  };

  useThrottle(() => {
    console.log("hello bro i am working");
  }, 5000);

  // useDebounce(() => {
  //   console.log("API");
  // }, 2000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Heading>Scroll :{number}</Heading>
    </Box>
  );
};
export default Scroll;
