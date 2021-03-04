import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import poster from '../../assets/images/video.png';

const PlayIcon = () => {
  return (
    <Box pos="relative">
      <svg
        width="63"
        height="63"
        viewBox="0 0 63 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.95122 51.6286L7.94982 51.6273C1.26221 45.556 0.211906 34.0847 3.62171 23.4686C7.0238 12.8765 14.6857 3.72226 24.6886 2.14198C34.3331 0.646466 44.9769 7.16704 52.3192 16.5271C55.9656 21.1755 58.7276 26.4451 60.0947 31.6065C61.463 36.7727 61.4172 41.7579 59.5586 45.9147C55.7756 54.3752 47.1395 59.6509 37.2362 60.8765C27.3434 62.1008 16.3222 59.2561 7.95122 51.6286Z"
          fill="white"
          stroke="#FCFBF9"
          strokeWidth="2.07217"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <path
          d="M0.207326 11.0038C0.198081 12.6129 1.94637 13.6181 3.33229 12.8005L10.793 8.39943C12.1453 7.60173 12.1538 5.64848 10.8085 4.83908L3.39862 0.381017C2.02207 -0.447171 0.267458 0.538238 0.258228 2.14469L0.207326 11.0038Z"
          fill="#EA7052"
        />
      </svg>
    </Box>
  );
};

type VideoCardProps = {
  color: string;
};

export const VideoCard = ({ color }: VideoCardProps): React.ReactElement => {
  return (
    <Box>
      <Flex
        w="236px"
        h="15.8rem"
        borderRadius="18px"
        justify="center"
        align="center"
        bg={`linear-gradient(90deg, rgba(234,112,82,0.2) 50%, rgba(234,112,82,0.2) 100%), url(${poster})`}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <PlayIcon />
      </Flex>
      <Text mt="1.5rem" color={color}>
        Subject
      </Text>
      <Text
        maxWidth="95%"
        as="h4"
        fontWeight="bold"
        color="#313848"
        fontSize="2.2rem"
      >
        Understanding motion
      </Text>
    </Box>
  );
};