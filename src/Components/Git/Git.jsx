import React from "react";
import { Box, Container, Grid, Heading, Image, VStack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const Git = () => {
  // const selectLastHalfYear = (contributions) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 7;

  //   return contributions.filter((day) => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };

  return (
    <Container
      id="Git"
      textAlign="center"
      mt="4rem"
      position="relative"
      overflow="hidden"
      pt="5rem"
    >
       <Heading>About My</Heading>
      <Heading variant="h1">GitHub Stats</Heading>
      <VStack gap={5} w="100%" mt="2rem">
        <Box
          border="1px solid #4db5ff"
          w="100%"
          p="20px"
          textAlign="start"
          borderRadius={15}
        >
          <GitHubCalendar username="Sunilkumar93" color="#4db5ff"/>
        </Box>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap={5}>
          <Box>
            <Image
              src="https://streak-stats.demolab.com/?user=Sunilkumar93&theme=tokyonight&border_radius=15&date_format=M%20j%5B%2C%20Y%5D&color=#4db5ff"
              alt="stats"
            />
          </Box>

          <Box>
            <Image
              src="https://github-readme-stats.vercel.app/api?username=Sunilkumar93&count_private=true&theme=tokyonight&border_radius=15&color=#fff"
              alt="stats"
            />
          </Box>
          <Box>
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sunilkumar93&layout=compact&theme=tokyonight&border_radius=15&color=fb982f"
              alt="stats"
            />
          </Box>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Git;
