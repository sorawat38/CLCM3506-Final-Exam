import { Button, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex as={"nav"} alignItems={"center"}>
      <Heading as={"h1"}>Good morning, Dr. Benjamin</Heading>
      <Spacer />
      <HStack spacing={"20px"}>
        <Text>drbenjaminpatel@example.com</Text>
        <Button colorScheme={"yellow"}>Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Header;
