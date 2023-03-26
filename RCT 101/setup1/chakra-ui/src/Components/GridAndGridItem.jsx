import { Grid, GridItem, Heading } from "@chakra-ui/react";

function GridAndGridItem() {
  return (
    <>
      <Heading as={"h2"} size="2xl">
        Grid and Grid Item
      </Heading>
      <Grid
        h={"200px"}
        templateRows="repeat(2 , 1fr)"
        templateColumns="repeat(5 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="blue.500" />
        <GridItem colSpan={2} bg="blue.500" />
        <GridItem colSpan={2} bg="blue.500" />
        <GridItem colSpan={4} bg="blue.500" />
      </Grid>
    </>
  );
}
export default GridAndGridItem;
