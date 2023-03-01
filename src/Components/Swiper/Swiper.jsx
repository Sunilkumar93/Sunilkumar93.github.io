import React from "react";
import { Box, Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper.css";

const SwiperComponent = ({ data = [] }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item,i) => {
          return (
            <SwiperSlide key={item.github+i}>
              <VStack
                alignItems="start"
                alignSelf="start"
                w="100%"
                h="100%"
                position="relative"
              >
                <Box w="100%">
                  <Text
                    fontSize={{ base: "1rem", md: "1.5rem" }}
                    fontWeight="semibold"
                    p={2}
                    bg="primary"
                  >
                    {item.title}
                  </Text>
                </Box>
                <Box w="100%" mt="0rem !important" h={{ base: "35%", md: "60%", lg: "57%" }}>
                  <Image
                    w="100%"
                    h="100%"
                    mt="0px"
                    src={item.image}
                    alt="image"
                  />
                </Box>
                <Box px={2} mt="0rem !important" textAlign="start">
                  <Text>{item.about}</Text>
                </Box>
                <Box px={2} mt="0rem !important" w="100%" textAlign="start">
                  <Box textAlign="start">
                    <Text color="primary">
                      Tech Stack:{" "}
                      <Box as="span" color="white">
                        {item.techStack}
                      </Box>
                    </Text>
                  </Box>
                </Box>
                <Flex
                  w="100%"
                  mt="0rem !important"
                  position="absolute"
                  justifyContent="space-evenly"
                  bottom="2"
                >
                  <Box>
                    <Link href={item.github} isExternal>
                      <Button variant="primary">Github</Button>
                    </Link>
                  </Box>
                  <Box>
                    <Link href={item.deployed} isExternal>
                      <Button variant="primary">Deploy</Button>
                    </Link>
                  </Box>
                </Flex>
              </VStack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
