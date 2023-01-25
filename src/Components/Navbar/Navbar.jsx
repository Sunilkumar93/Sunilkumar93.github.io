import { Container, Heading, Hide, Link, Show, Spacer } from "@chakra-ui/react";
import {
  FaFileAlt,
  FaGithub,
  FaGraduationCap,
  FaHome,
  FaMedal,
  FaUserAlt,
  FaWpforms,
} from "react-icons/fa";

import React from "react";

import Resume from "../../assets/Sunil_Kumar_Resume.pdf";

const Navbar = () => {
  return (
    <>
      <Container
        background={"rgba(0,0,0,0.7)"}
        padding={{base:"0.5rem 1rem",lg:"0.5rem 2rem"}}
        display={{ base: "none", md: "flex" }}
        position="fixed"
        transition="translate(-50%)"
        left={{ md: "7%", lg: "12.5%" }}
        alignItems="center"
        top="2rem"
        borderRadius="3rem"
        gap="2rem"
        zIndex={5}
      >
        <Hide above="lg">
          <Heading as="h5" size="md" color="primary">
            Sunil
          </Heading>
        </Hide>
        <Show above="lg">
          <Heading as="h5" size="md" color="primary">
            Sunil Kumar
          </Heading>
        </Show>

        <Spacer />
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          _active={{
            color: "white",
          }}
          href="#"
        >
          Home
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#About"
        >
          About
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Education"
        >
          Education
        </Link>

        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Skill"
        >
          Skill
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Project"
        >
          Project
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Git"
        >
          Git
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Contact"
        >
          Contact
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href={Resume}
          isExternal
        >
          Resume
        </Link>
      </Container>
      <Container
        maxW="max-content"
        background={"rgba(0,0,0,0.7)"}
        padding="1.1rem 1.3rem"
        display={{ base: "flex", md: "none" }}
        position="fixed"
        transition="ease-in-out"
        left="calc(50% - 9.7rem)"
        alignItems="center"
        top="2rem"
        borderRadius="3rem"
        gap="1.5rem"
        zIndex={5}
      >
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          _active={{
            color: "white",
          }}
          href="#"
        >
          <FaHome />
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#About"
        >
          <FaUserAlt />
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Education"
        >
          <FaGraduationCap />
        </Link>

        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Skill"
        >
          <FaMedal />
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Project"
        >
          <FaFileAlt />
        </Link>
        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Git"
        >
          <FaGithub />
        </Link>

        <Link
          borderRadius="50%"
          color="colorLight"
          fontSize="1.1rem"
          _hover={{
            color: "white",
          }}
          href="#Contact"
        >
          <FaWpforms />
        </Link>
      </Container>
    </>
  );
};

export default Navbar;
