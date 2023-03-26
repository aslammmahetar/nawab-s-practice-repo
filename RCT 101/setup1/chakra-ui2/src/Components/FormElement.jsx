import {
  Container,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  HStack,
  Radio,
  RadioGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";

function FormElement() {
  return (
    <>
      <Container
        maxW={{ base: "container.sm", md: "container.md", sm: "container.sm" }}
      >
        <VStack>
          <FormControl>
            <FormLabel>UserName : </FormLabel>
            <Input type={"text"} />
          </FormControl>
          <FormControl>
            <FormLabel>Select Country </FormLabel>
            <Select>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Select Superhero</FormLabel>
            <HStack spacing={8}>
              <Checkbox>Avengers</Checkbox>
              <Checkbox>Avengers</Checkbox>
              <Checkbox>Avengers</Checkbox>
            </HStack>
          </FormControl>
          <FormControl>
            <FormLabel>Select Gender</FormLabel>
            <RadioGroup>
              <HStack spacing={8}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">others</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Text>Post</Text>
          <Textarea></Textarea>
        </VStack>
      </Container>
    </>
  );
}
export default FormElement;
