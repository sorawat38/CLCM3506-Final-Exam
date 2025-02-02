import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiFileOn } from "react-icons/ci";
import { Icon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader
        borderTopRadius={"lg"}
        bgGradient={"linear(to-r, teal.400, teal.200)"}
      >
        <Heading size={"lg"} color={"white"}>
          Upcoming appointments
        </Heading>
      </CardHeader>
      <Grid templateColumns={"auto 1fr 1fr"}>
        <Image
          borderRadius="full"
          maxW={{ base: "100%", md: "300px" }}
          src="src/assets/woman_icon.png"
          alt="Caffe Latte"
          p={"20px"}
        />
        <CardBody>
          <Heading size={"xl"}>Sophia Reynolds</Heading>
          <Heading size={"md"} color={"teal.500"}>
            10:00 AM - 11:00 AM
          </Heading>
        </CardBody>
        <Flex
          direction={"row"}
          height={"100%"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          gap={4}
          p={"20px"}
        >
          <Button colorScheme="teal" flexGrow={2} size={"lg"}>
            Join
          </Button>
          <Button colorScheme="red" flexGrow={2} size={"lg"}>
            Cancel
          </Button>
        </Flex>
      </Grid>
    </Card>
  );
}

function NextMeetings() {
  const meetings = [
    {
      name: "Dr. Stephen Strange",
      role: "Neurosurgeon",
      img: "src/assets/stephen_strange.png",
    },
    {
      name: "Dr. Emily Carter",
      role: "Cardiologist",
      img: "src/assets/emily_carter.png",
    },
    {
      name: "Dr. Daniel Nguyen",
      role: "Pediatrician",
      img: "src/assets/daniel_nguyen.png",
    },
  ];
  return (
    <Box>
      <Heading size={"lg"} color={"teal.500"}>
        Next meetings
      </Heading>
      <Stack spacing={5} m={"10px"}>
        {meetings.map((meeting, index) => (
          <Card key={index}>
            <CardBody>
              <HStack spacing={10} as={ReactRouterLink}>
                <Avatar
                  size={"xl"}
                  name={meeting.name.replace("Dr. ", "")}
                  src={meeting.img}
                />
                <Box>
                  <Heading as={"h3"}>{meeting.name}</Heading>
                  <Text as={"h4"}>{meeting.role}</Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

function LabAndTestResult() {
  const files = [
    {
      name: "Patient 1 Blood Lab Result",
    },
    {
      name: "Patient 2 X-ray Result",
    },
    {
      name: "Patient 3 Covid-19 Test Result",
    },
  ];
  return (
    <Box>
      <Heading size={"lg"} color={"teal.500"}>
        Lab and Test Result
      </Heading>
      <Stack spacing={5} m={"10px"}>
        {files.map((file, index) => (
          <Card key={index}>
            <CardBody>
              <HStack spacing={10} as={ReactRouterLink}>
                <Icon as={CiFileOn} boxSize={16} />
                <Box>
                  <Text fontSize={"lg"} fontWeight={"bold"}>
                    {file.name}
                  </Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

function Dashboard() {
  return (
    <Grid templateRows={"auto 1fr"} templateColumns={"repeat(2, 1fr)"} gap={8}>
      <GridItem colSpan={2}>
        <UpcomingAppointments />
      </GridItem>
      <GridItem colSpan={1}>
        <NextMeetings />
      </GridItem>
      <GridItem colSpan={1}>
        <LabAndTestResult />
      </GridItem>
    </Grid>
  );
}

export default Dashboard;
