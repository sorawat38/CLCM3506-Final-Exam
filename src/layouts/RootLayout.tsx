import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar.tsx";

function RootLayout() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "header" "main"`,
        md: `"nav header" "nav main"`,
      }}
      gridTemplateRows={"auto 1fr"}
      gridTemplateColumns={{ base: "1fr", md: "1fr 5fr" }}
    >
      <GridItem
        bg={"teal.300"}
        minHeight={{ md: "100vh" }}
        p={"50px"}
        area={"nav"}
      >
        <Sidebar />
      </GridItem>
      <GridItem p={"40px"} area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem p={"40px"} area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
