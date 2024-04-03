import { List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <List color={"white"} fontSize={"1.2em"} fontWeight={"bold"} spacing={10}>
      <ListItem>
        <Text fontSize={"2em"}>My Hospital</Text>
      </ListItem>
      <ListItem>
        <NavLink to={"/"}>Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={"/medical-record"}>Medical Record</NavLink>
      </ListItem>
    </List>
  );
}

export default Sidebar;
