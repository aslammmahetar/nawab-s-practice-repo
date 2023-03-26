import {
  Button,
  Heading,
  Center,
  Box,
  useBreakpointValue,
  VStack,
  Text,
} from "@chakra-ui/react";

function UseBreakPoints() {
  const flag = useBreakpointValue({
    base: "base screen",
    sm: "small screen",
    md: "medium screen",
    lg: "large screen",
    xl: "xtra large screen",
    "2xl": "xtra xtra large screen",
  });
  const btnVarient = useBreakpointValue({
    base: "outline",
    md: "solid",
  });
  return (
    <Box m={"25px"}>
      <Center>
        <VStack>
          <Heading>useBreakpointValue</Heading>
          <Text>{flag}</Text>
          <Button colorScheme={"blue"} variant={btnVarient}>
            I am a button
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}
export default UseBreakPoints;
