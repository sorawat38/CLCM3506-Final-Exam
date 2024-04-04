import {
  Avatar,
  Box,
  Flex,
  HStack,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, InfoIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

function Sidebar() {
  const handleMouseOver = (e: {
    currentTarget: { style: { textDecoration: string } };
  }) => {
    e.currentTarget.style.textDecoration = "underline";
  };

  const handleMouseOut = (e: {
    currentTarget: { style: { textDecoration: string } };
  }) => {
    e.currentTarget.style.textDecoration = "none";
  };

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100%"}
    >
      <List
        color={"teal.400"}
        fontSize={"1.2em"}
        fontWeight={"bold"}
        spacing={10}
      >
        <ListItem>
          <Img src={"src/assets/logo.png"} alt={"Logo"} />
        </ListItem>
        <ListItem>
          <NavLink
            to={"/"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <ListIcon as={CalendarIcon} color={"teal.400"} />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={"/medical-record"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <ListIcon as={InfoIcon} color={"teal.400"} />
            Medical Record
          </NavLink>
        </ListItem>
      </List>
      <HStack spacing={5}>
        <Avatar size={"md"} name={"B"} />
        <Box>
          <Text>Benjamin Patel</Text>
          <Text
            as={ReactRouterLink}
            to={"/profile"}
            fontSize={"sm"}
            fontWeight={"light"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Profile
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
}

export default Sidebar;
