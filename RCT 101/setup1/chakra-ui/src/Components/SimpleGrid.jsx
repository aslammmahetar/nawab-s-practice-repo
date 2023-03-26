import { Box, Center, SimpleGrid, Heading } from "@chakra-ui/react";

function SimpleGridExample() {
  return (
    <Box>
      <Center>
        <Heading m={"auto"} di>
          Simple Grid with resposiveness
        </Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5, "2xl": 6 }}
        spacing="10"
        mt={"25px"}
      >
        <Box bg={"red"} height="80px"></Box>
        <Box bg={"blue"} height="80px"></Box>
        <Box bg={"yellow"} height="80px"></Box>
        <Box bg={"green"} height="80px"></Box>
        <Box bg={"red"} height="80px"></Box>
        <Box bg={"blue"} height="80px"></Box>
        <Box bg={"yellow"} height="80px"></Box>
        <Box bg={"green"} height="80px"></Box>
        <Box bg={"red"} height="80px"></Box>
        <Box bg={"blue"} height="80px"></Box>
        <Box bg={"yellow"} height="80px"></Box>
        <Box bg={"green"} height="80px"></Box>
        <Box bg={"red"} height="80px"></Box>
        <Box bg={"blue"} height="80px"></Box>
        <Box bg={"yellow"} height="80px"></Box>
        <Box bg={"green"} height="80px"></Box>
        <Box bg={"red"} height="80px"></Box>
        <Box bg={"blue"} height="80px"></Box>
        <Box bg={"yellow"} height="80px"></Box>
        <Box bg={"green"} height="80px"></Box>
        <Box bg={"yellow"} height="80px"></Box>
      </SimpleGrid>
    </Box>
  );
}

export default SimpleGridExample;
