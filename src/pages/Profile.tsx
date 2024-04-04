import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";

function Profile() {
  return (
    <Tabs mt={"40px"} p={"20px"} colorScheme={"teal"} variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: "white", bg: "teal.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "teal.400" }}>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={10} mt={"20px"}>
            <ListItem>
              <ListIcon as={EmailIcon} color={"teal.400"} />
              Email: drbenjaminpatel@example.com
            </ListItem>
            <ListItem>
              <ListIcon as={PhoneIcon} color={"teal.400"} />
              Phone: 555-555-5555
            </ListItem>
            <ListItem>
              <ListIcon as={FaLocationDot} color={"teal.400"} />
              Address: 1234 Elm St.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Profile;
