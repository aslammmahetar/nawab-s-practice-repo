import { Box, Center, Container } from "@chakra-ui/react";
function Home() {
  return (
    <>
      <Center>
        <Box bg={"lightsalmon"} p={10}>
          Hello Nawab The developer is here
        </Box>
      </Center>
      <Container mt={"25px"} border="dashed black">
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Container>
    </>
  );
}
export default Home;
