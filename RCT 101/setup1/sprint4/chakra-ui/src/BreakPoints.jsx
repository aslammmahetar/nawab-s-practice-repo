import { Box, SimpleGrid } from "@chakra-ui/react";

function BreakPoints() {
  const grid = new Array(12).fill(0).map((_, i) => i + 1);

  return (
    <>
      <SimpleGrid columns={4} spacing={10}>
        {grid.map((el) => {
          return (
            <Box bg={"tomato"} height="80px">
              {el}
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default BreakPoints;
