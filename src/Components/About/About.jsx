import React from "react";

import gif from "../../assets/gif.gif";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import Resume from "../../assets/Sunil_Kumar_Resume.pdf";

const About = () => {
  return (
    <Container
      id="About"
      padding="2rem"
      height={{ base: "1150px", md: "730px", lg: "700px" }}
      textAlign="center"
      mt="4rem"
      position="relative"
      overflow="hidden"
    >
      <Heading>Get To Know</Heading>
      <Heading variant="h1">About Me</Heading>
      <VStack>
        <Box>
          <Heading variant="h1" fontSize="1.8rem" textAlign="start">
            I am a Full Stack Developer
          </Heading>
          <Box mt="10px" textAlign="start" alignItems="start">
            <Text>
              Hello, World! I am Sunil Kumar A MERN stack developer,Adaptable
              and responsible web developer capable of writing production-ready
              code using HTML, CSS, JavaScript, React.Js on the front-end and
              NodeJs, Express Js on the back-end to build singlepage
              applications. Looking forward to working in a fast-paced
              environment and playing a key role in a company's growth. Hope to
              work in a challenging environment as a specialized MERN stack
              developer.
            </Text>
          </Box>
        </Box>
      </VStack>
      <Flex
        w={{ base: "100%", md: "100%", lg: "70%" }}
        my={"2rem"}
        alignItems="start"
        flexWrap={{ base: "wrap-reverse", md: "nowrap" }}
        justifyContent="space-between"
      >
        <Box alignSelf="start" borderRadius={15} overflow="hidden">
          <Image w="332px" height="250px" src={gif} alt="" />
        </Box>
        <Box>
          <Flex
            gap="2"
            alignItems="center"
            color="primary"
            _hover={{ cursor: "pointer", color: "white" }}
          >
            <HiMail />
            <Text color="white">Sunilkumarsihag098@gmail.com</Text>
          </Flex>
          <Flex
            gap="2"
            alignItems="center"
            color="primary"
            _hover={{ cursor: "pointer", color: "white" }}
          >
            <FaLocationArrow />
            <Text color="white">Churu Rajasthan</Text>
          </Flex>
          <Link href="tel:8696343902">
            <Flex gap="2" alignItems="center">
              <FaPhone />
              <Text color="white">+91 8696343902</Text>
            </Flex>
          </Link>
          <Link href="https://github.com/Sunilkumar93" isExternal>
            <Flex gap="2" alignItems="center">
              <FaGithub />
              <Text color="white">Sunilkumar93</Text>
            </Flex>
          </Link>
          <Link href="https://linkedin.com/in/sunil-kumar-89212b247" isExternal>
            <Flex gap="2" alignItems="center">
              <FaLinkedin />
              <Text color="white">Sunil Kumar</Text>
            </Flex>
          </Link>
          <Link href="https://www.instagram.com/sunilsihag93/" isExternal>
            <Flex gap="2" alignItems="center">
              <FaInstagram />
              <Text color="white">@sunilsihag93</Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
      <Flex
        mt="20px"
        gap={5}
        mx="auto"
        w={{ base: "100%", md: "70%", lg: "50%" }}
        justifyContent="space-around"
      >
        <Link href="#Contact">
          <Button variant="primary">Let's Talk</Button>
        </Link>
        <Link href={Resume} download>
          <Button>Resume</Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default About;
