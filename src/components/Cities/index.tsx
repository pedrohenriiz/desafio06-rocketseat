import { Grid, Heading } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <>
      <Heading fontWeight='500' fontSize={['2xl', '4xl']} mb='10'>
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}
      >
        <City
          name='Londres'
          country='Reino Unido'
          flag='./flag4.png'
          image='./Foto-4.png'
        />
        <City
          name='Paris'
          country='França'
          flag='./flag3.png'
          image='./Foto-3.png'
        />
        <City
          name='Roma'
          country='Itália'
          flag='./flag2.png'
          image='./Foto-2.png'
        />
        <City
          name='Praga'
          country='República Tcheca'
          flag='./flag1.png'
          image='./Foto-1.png'
        />
        <City
          name='Amsterdã'
          country='Holanda'
          flag='./flag.png'
          image='./Foto.png'
        />
      </Grid>
    </>
  );
}
