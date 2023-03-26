import {
  Heading,
  Box,
  Flex,
  Center,
  Text,
  Square,
  Spacer,
} from "@chakra-ui/react";

function FlexExample() {
  return (
    <Box>
      <Heading>Flex Exmple</Heading>
      <Flex color="white">
        <Center w="100px" bg="green.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>
      <Heading as={"h3"} size="lg">
        Flex Spacer
      </Heading>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
        <Spacer />
        <Box p={"4"} bg="yellow.100">
          Box 3
        </Box>
      </Flex>
    </Box>
  );
}

export default FlexExample;
