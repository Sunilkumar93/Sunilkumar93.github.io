import React from "react";
import { Box, Container, Grid, Image, VStack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const Git = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Container
      id="Git"
      textAlign="center"
      mt="4rem"
      position="relative"
      overflow="hidden"
    >
      <VStack gap={5} w="100%">
        <Box border="1px solid #4db5ff" w="max-content" p="20px" textAlign="start" borderRadius={15}>
          <GitHubCalendar
            username="Sunilkumar93"
            transformData={selectLastHalfYear}
            color="#4db5ff"
          />
        </Box>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap={5}>
          <Box>
            <Image src="https://streak-stats.demolab.com/?user=Sunilkumar93&theme=tokyonight&border_radius=15&date_format=M%20j%5B%2C%20Y%5D&color=#4db5ff" />
          </Box>

          <Box>
            <Image src="https://github-readme-stats.vercel.app/api?username=Sunilkumar93&count_private=true&theme=tokyonight&border_radius=15&color=#fff" />
          </Box>
          <Box>
            <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sunilkumar93&layout=compact&theme=tokyonight&border_radius=15&color=fb982f" />
          </Box>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Git;
