import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_93sgifg",
        "template_owi3opt",
        form.current,
        "21sr7At8QmSlp_n0q"
      )
      .then(
        () => {
          toast({
            title: "E-mail",
            description: "E-mail sent successfully..",
            status: "success",
            position: "top-right",
            duration: 4000,
            isClosable: true,
          });
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        (error) => {
          toast({
            title: `Please enter correct detail`,
            description: error.message,
            status: error,
            position: "top-right",
            duration: 4000,
            isClosable: true,
          });
          setLoading(false);
        }
      );
  };
  return (
    <Container
      id="Contact"
      padding="2rem"
      textAlign="center"
      mt="4rem"
      position="relative"
      overflow="hidden"
    >
      <Flex w="100%" flexDirection={{ base: "column", md: "row" }} rowGap={4}>
        <Flex
          flexDirection={{ base: "row", md: "column" }}
          w={{ base: "100%", md: "20%" }}
          justifyContent="space-around"
        >
          <Box>
            <Link href="https://github.com/sunilkumar93" isExternal>
              <FaGithub fontSize="3rem" />
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/sunil-kumar-89212b247"
              isExternal
            >
              <FaLinkedin fontSize="3rem" />
            </Link>
          </Box>
          <Box>
            <Link href="https://www.instagram.com/sunilsihag93" isExternal>
              <FaInstagram fontSize="3rem" />
            </Link>
          </Box>
          <Box>
            <Link href="tel:8696343902">
              <FaPhone fontSize="3rem" />
            </Link>
          </Box>
          <Box>
            <Link href="https://wa.me/918696343902" isExternal>
              <FaWhatsapp fontSize="3rem" />
            </Link>
          </Box>
        </Flex>
        <Box
          w={{ base: "100%", md: "80%", lg: "70%" }}
          border="2px solid white"
          borderRadius={15}
          py={5}
          px={{ base: 2, md: 10 }}
          textAlign="start"
        >
          <form ref={form} onSubmit={(e) => handleSubmit(e)}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="Enter Your Email"
                value={email}
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="user_name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Enter Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <Button isLoading={loading} type="submit" variant="primary" mt={4}>
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
