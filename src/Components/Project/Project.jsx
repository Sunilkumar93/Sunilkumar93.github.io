import {
  Box,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Swiper from "../Swiper/Swiper";

import { allProjects } from "../data";

const Project = () => {
  return (
    <Container
      id="Project"
      padding="2rem"
      textAlign="center"
      mt="4rem"
      position="relative"
      overflow="hidden"
      pt="5rem"
    >
      <Heading>All my</Heading>
      <Heading variant="h1">Projects</Heading>
      <Box mt="3rem">
        <Tabs align="center" variant="enclosed" size="lg">
          <TabList>
            <Tab>All</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box w="100%" h={{ base: "500px", md: "600px", lg: "540px" }}>
                <Swiper data={allProjects} />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Project;
