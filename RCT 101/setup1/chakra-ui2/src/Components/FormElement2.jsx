import {
  Container,
  VStack,
  Input,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";

import { useState } from "react";

function FormElement2() {
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [avengers, setAvengers] = useState(false);
  const [superman, setSuperman] = useState(false);
  const [batman, setbatman] = useState(false);
  const [value, setValue] = useState("1");
  const [otpVal, setOtp] = useState("");
  const [inpuVal, setInputValue] = useState("");

  console.log(
    username,
    country,
    avengers,
    superman,
    batman,
    otpVal,
    value,
    inpuVal
  );

  return (
    <>
      <Container
        maxW={{
          base: "container.sm",
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
        }}
      >
        <VStack gap={"24px"}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              border={"1px solid black"}
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Select Country</FormLabel>
            <Select
              border={"1px solid black"}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">---Select Country---</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Select Superhero</FormLabel>
            <HStack spacing={10}>
              <Checkbox
                isChecked={avengers}
                onChange={(e) => setAvengers(e.target.checked)}
              >
                Avengers
              </Checkbox>
              <Checkbox
                isChecked={superman}
                onChange={(e) => setSuperman(e.target.checked)}
              >
                Superman
              </Checkbox>
              <Checkbox
                isChecked={batman}
                onChange={(e) => setbatman(e.target.checked)}
              >
                Batman
              </Checkbox>
            </HStack>
          </FormControl>
          <FormControl>
            <FormLabel>Select Gender</FormLabel>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Prefer Not to say">Prefer Not to say</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <HStack>
            <PinInput value={otpVal} onChange={(value) => setOtp(value)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Text>Post</Text>
          <Textarea
            value={inpuVal}
            onChange={(e) => setInputValue(e.target.value)}
          ></Textarea>
        </VStack>
      </Container>
    </>
  );
}
export default FormElement2;
