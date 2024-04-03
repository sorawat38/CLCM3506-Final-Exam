import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

function Header() {
  return (
    <Flex as={"nav"} alignItems={"center"}>
      <Heading as={"h1"}>Good morning, Dr. Benjamin</Heading>
      <Spacer />
      <HStack spacing={"20px"}>
        <Box bg={"gray.200"} p={"10px"}>
          M
        </Box>
        <Text>test@test.com</Text>
        <Button colorScheme={"yellow"}>Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Header;
