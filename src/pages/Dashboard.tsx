import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

function UpcomingAppointments() {
  return (
    <Card overflow="hidden">
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
  return (
    <Card>
      <CardHeader>
        <Heading size={"lg"} color={"teal.500"}>
          Next meetings
        </Heading>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
}

function LabAndTestResult() {
  return (
    <Card>
      <CardHeader>
        <Heading size={"lg"} color={"teal.500"}>
          Lab and Test Result
        </Heading>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
}

function Dashboard() {
  return (
    <Grid
      templateRows={"repeat(2, 1fr)"}
      templateColumns={"repeat(2, 1fr)"}
      gap={10}
    >
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
