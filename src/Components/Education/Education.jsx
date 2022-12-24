import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import eduGif from "../../assets/eduGif.gif";
const Education = () => {
  return (
    <Container
      id="Education"
      padding="2rem"
      textAlign="center"
      mt="4rem"
      position="relative"
      overflow="hidden"
    >
      <Heading>About My</Heading>
      <Heading variant="h1">Education</Heading>
      <Flex
        mt="2rem"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          w={{ base: "100%", lg: "55%" }}
          flexDirection={{ base: "column", md: "row" }}
          flexWrap={{ base: "nowrap", lg: "wrap" }}
          justifyContent="space-between"
          rowGap={5}
        >
          <VStack alignItems="start" textAlign="start">
            <Box>
              <Text color="primary" fontSize="1.2rem">
                Full Stack Web Development(Full Time)
              </Text>
            </Box>
            <Box>
              <Text fontSize="1rem">Masai School (Bangalore India)</Text>
            </Box>
            <Box>
              <Text fontSize="1rem">2022-Present</Text>
            </Box>
          </VStack>
          <VStack alignItems="start" textAlign="start">
            <Box>
              <Text color="primary" fontSize="1.2rem">
                Post Graduation
              </Text>
            </Box>
            <Box>
              <Text fontSize="1rem">MGSU (Bikaner India)</Text>
            </Box>
            <Box>
              <Text fontSize="1rem">2019-2021</Text>
            </Box>
          </VStack>
          <VStack alignItems="start" textAlign="start">
            <Box>
              <Text color="primary" fontSize="1.2rem">
                Graduation
              </Text>
            </Box>
            <Box>
              <Text fontSize="1rem">MGSU (Bikaner India)</Text>
            </Box>
            <Box>
              <Text fontSize="1rem">2015-2019</Text>
            </Box>
          </VStack>
        </Flex>
        <Show above="lg">
          <Box w="40%" borderRadius={15} overflow="hidden">
            <Image w="100%" h="100%" src={eduGif} alt="edu" />
          </Box>
        </Show>
      </Flex>
    </Container>
  );
};

export default Education;
