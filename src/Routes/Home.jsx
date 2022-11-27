import React from "react";
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import Sunil_Kumar_Resume from "../asset/Sunil_Kumar_Resume.pdf";
import photo from "../asset/photo.png";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Box h={{ base: "auto", md: "80vh" }}>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        justifyContent="space-around"
        mt={[0, 4, 6, 8]}
      >
        <Box
          p={[4, 8, 14, 20]}
          textAlign={{ base: "center", md: "left" }}
          spacing={10}
        >
          <Heading sixe="xl" mt={2}>
            Hello, World!
          </Heading>
          <Heading size="xl" mt={2}>
            I am Sunil Kumar
          </Heading>
          <Heading size="md" mt={2}>
            FULL STACK DEVELOPER
          </Heading>
          <Flex alignItems="center" my={3} gap={2}>
            <Button bg="white" color="black">
              <a href={Sunil_Kumar_Resume} download={true}>
                Resume <ExternalLinkIcon />
              </a>
            </Button>
            <NavLink to="#contact">
              <Button varient="outline">Lets Talk!</Button>
            </NavLink>
          </Flex>
          <Box>
            <Flex
              mt={3}
              gap={5}
              justifyContent={{ base: "left", sm: "center", lg: "left" }}
            >
              <Link href="https://github.com/Sunilkumar93" isExternal>
                <BsGithub fontSize="2em" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sunil-kumar-89212b247/"
                isExternal
              >
                <BsLinkedin fontSize="2em" />
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box align="center" p={10}>
          <Image
            src={photo}
            borderRadius="80"
            boxSize={{ base: "150px", md: "250px" }}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
