import {
  Box,
  Container,
  Heading,
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
        <Box w="100%" h={{ base: "540px", md: "600px", lg: "600px" }}>
          <Swiper data={allProjects} />
        </Box>
      </Box>
    </Container>
  );
};

export default Project;
