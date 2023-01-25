import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import Resume from "../../assets/Sunil_Kumar_Resume.pdf";
import me from "../../assets/photo.png";
const Home = () => {
  return (
    <Container
      id="Home"
      height={{ base: "720px" }}
      padding="2rem"
      textAlign="center"
      mt="4rem"
      position="relative"
      overflow="hidden"
    >
      <Heading>Hello I`m</Heading>
      <Heading variant="h1">Sunil Kumar</Heading>
      <Heading color="colorLight">FullStack Developer</Heading>
      <Flex mt="2.5rem" gap="1.2rem" justifyContent="center">
        <Link href={Resume} isExternal>
          <Button>Resume</Button>
        </Link>
        <Link href="#Contact">
          <Button variant="primary">Let's Talk</Button>
        </Link>
      </Flex>
      <VStack
        display={{ base: "none", md: "flex", lg: "flex" }}
        alignItems="center"
        gap="0.2rem"
        position="absolute"
        left={0}
        bottom="5rem"
        _after={{ content: '""', width: "1px", height: "2rem", bg: "primary" }}
      >
        <Link
          w="max-content"
          href="https://www.linkedin.com/in/sunil-kumar-89212b247"
          isExternal
        >
          <BsLinkedin />
        </Link>
        <Link w="max-content" href="https://github.com/sunilkumar93" isExternal>
          <BsGithub />
        </Link>
        <Link
          w="max-content"
          href="https://www.instagram.com/sunilsihag93"
          isExternal
        >
          <BsInstagram />
        </Link>
      </VStack>
      <Box
        bgGradient="linear-gradient(primary,transparent)"
        width={"22rem"}
        mt="2rem"
        height="27rem"
        position="absolute"
        left="calc(50% - 11rem)"
        borderRadius="12rem 12rem 0 0"
        padding="1rem"
        overflow="hidden"
      >
        <Image w="100%" h="110%" src={me} objectFit="cover" alt="me" />
      </Box>
      <Link
        display={{ base: "none", md: "block", lg: "block" }}
        position="absolute"
        right="-1.7rem"
        bottom="7rem"
        href="#Footer"
        transform="rotate(90deg)"
        fontWeight="200"
        fontSize="0.9rem"
      >
        Scrolldown
      </Link>
    </Container>
  );
};

export default Home;
