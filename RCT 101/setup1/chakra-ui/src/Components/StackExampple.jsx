import {
  Stack,
  StackDivider,
  HStack,
  VStack,
  Divider,
  Box,
  Heading,
  Center,
} from "@chakra-ui/react";

function StackExample() {
  return (
    <>
      <Center>
        <Heading>HStack , VStack, Stack</Heading>
      </Center>
      <Heading>HStack</Heading>
      <HStack spacing="240px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <Divider />
      <Heading>VStack</Heading>

      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
      <Stack direction={{ base: "column", lg: "row" }}>
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </Stack>
    </>
  );
}
export default StackExample;
