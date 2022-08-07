import { Flex } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { HomeCards } from '../components/HomeCards';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <HomeCards />
    </Flex>
  );
}
