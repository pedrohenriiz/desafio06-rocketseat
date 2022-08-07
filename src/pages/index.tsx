import { Flex, Heading } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { HomeCards } from '../components/HomeCards';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <HomeCards />

      <Divider />
      <Heading
        textAlign='center'
        fontWeight='500'
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
