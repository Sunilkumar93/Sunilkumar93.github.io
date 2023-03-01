import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <Container
      id="Skill"
      padding="2rem"
      textAlign="center"
      mt="4rem"
      position="relative"
      pt="5rem"
    >
      <Heading>About my</Heading>
      <Heading variant="h1">Skills</Heading>
      <Flex
        mt="2rem"
        w="100%"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        rowGap="4rem"
      >
        <Grid
          templateColumns="repeat(4,1fr)"
          gap={10}
          w={{ base: "100%", lg: "50%" }}
        >
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <FaHtml5 size="100%" />
          </Box>
          <Box
            w={{ base: "100%", md: "40%", lg: "50%" }}
            color="primary"
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <FaCss3 size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <FaJs size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <FaReact size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <SiTypescript size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <SiRedux size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <FaNodeJs size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <SiExpress size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <SiMongodb size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <SiChakraui size="100%" />
          </Box>
          <Box
            color="primary"
            w={{ base: "100%", md: "40%", lg: "50%" }}
            _hover={{
              cursor: "pointer",
              color: "white",
            }}
          >
            <SiNextdotjs size="100%" />
          </Box>
        </Grid>
        <Flex
          justifyContent="space-between"
          w={{ base: "100%", lg: "45%" }}
          flexDir={{ base: "column", md: "row" }}
          rowGap={3}
        >
          <Box w={{ base: "100%", md: "45%" }}>
            <Accordion borderBlock="1px solid white" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton color="primary" fontSize="1.5rem">
                    <Box as="span" flex={1} textAlign="left">
                      Soft Skills
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <VStack alignItems="start">
                    <Box borderBlockEnd="1px solid white">Team Work</Box>
                    <Box borderBlockEnd="1px solid white">Problem Solving</Box>
                    <Box borderBlockEnd="1px solid white">Communication</Box>
                    <Box></Box>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w={{ base: "100%", md: "45%" }}>
            <Accordion allowToggle borderBlock="1px solid white">
              <AccordionItem>
                <h2>
                  <AccordionButton color="primary" fontSize="1.5rem">
                    <Box as="span" flex={1} textAlign="left">
                      Statistics
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <VStack alignItems="start">
                    <Flex
                      gap={1}
                      alignItems="center"
                      borderBlockEnd="1px solid white"
                    >
                      <Box>
                        <Text color="primary">Coding:</Text>
                      </Box>
                      <Box>
                        <Text>1200+ Hours</Text>
                      </Box>
                    </Flex>
                    <Flex
                      gap={1}
                      borderBlockEnd="1px solid white"
                      alignItems="center"
                    >
                      <Box>
                        <Text color="primary">Dsa:</Text>
                      </Box>
                      <Box>
                        <Text>400+ Problem</Text>
                      </Box>
                    </Flex>
                    <Flex
                      gap={1}
                      alignItems="center"
                      borderBlockEnd="1px solid white"
                    >
                      <Box>
                        <Text color="primary">Softskills:</Text>
                      </Box>
                      <Box>
                        <Text>100+ Hours</Text>
                      </Box>
                    </Flex>

                    <Box></Box>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Skills;
