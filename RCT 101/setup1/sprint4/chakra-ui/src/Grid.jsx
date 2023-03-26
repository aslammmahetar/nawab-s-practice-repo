import { HStack, VStack, Heading, Divider, Stack, Box } from "@chakra-ui/react";

function Grid() {
  return (
    <>
      <Heading>H Stack</Heading>
      <HStack spacing={"24px"}>
        <Box w={"50px"} h="50px" bg="red">
          1
        </Box>
        <Box w={"50px"} h="50px" bg="red">
          2
        </Box>
        <Box w={"50px"} h="50px" bg="red">
          3
        </Box>
      </HStack>
      <Heading>V Stack</Heading>
      <Heading>Stack</Heading>
    </>
  );
}
export default Grid;
