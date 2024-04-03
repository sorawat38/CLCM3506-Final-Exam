import { Avatar, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
      <List color={"white"} fontSize={"1.2em"} fontWeight={"bold"} spacing={10}>
        <ListItem>
          <Text fontSize={"2em"}>My Hospital</Text>
        </ListItem>
        <ListItem>
          <NavLink
            to={"/"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to={"/medical-record"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Medical Record
          </NavLink>
        </ListItem>
      </List>
      <Avatar size={"md"} name={"S"} />
    </Flex>
  );
}

export default Sidebar;
