import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
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
        bg={"gray.50"}
        minHeight={{ md: "100vh" }}
        p={"50px"}
        area={"nav"}
      >
        <Sidebar />
      </GridItem>
      <GridItem px={"40px"} pt={"60px"} area={"header"}>
        <Header />
      </GridItem>
      <GridItem p={"40px"} area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
