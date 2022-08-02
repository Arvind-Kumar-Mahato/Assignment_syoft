import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import Signup from "../Authentication/Signup";
import Login from "../Authentication/Login";



const Homepage = () => {
  return (
    <Container maxW="xl" centerConten>
      
      <Box bg="#128c7e" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%" color={"white"}>
              Login
            </Tab>
            <Tab width="50%" color={"white"}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login/>}</TabPanel>

            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
