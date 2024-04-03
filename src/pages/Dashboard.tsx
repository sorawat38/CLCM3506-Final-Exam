import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";

function Dashboard() {
  return (
    <Grid
      templateRows={"repeat(2, 1fr)"}
      templateColumns={"repeat(2, 1fr)"}
      gap={10}
    >
      <GridItem colSpan={2}>
        <Card>
          <CardHeader>
            <Heading size={"lg"}>Upcoming appointments</Heading>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={1}>
        <Card>
          <CardHeader>
            <Heading size={"lg"}>Next meetings</Heading>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={1}>
        <Card>
          <CardHeader>
            <Heading size={"lg"}>Lab and Test Result</Heading>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Dashboard;
