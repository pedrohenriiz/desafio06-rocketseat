import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface CardProps {
  icon: string;
  text: string;
}

export function Card({ icon, text }: CardProps) {
  const mobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={['row', 'column']} align='center' justify='center'>
      {mobile ? (
        <Image src={`./icons/${icon}.svg`} w='85px' h='85px' mb='6' />
      ) : (
        <Text color='yellow.400' fontSize='4xl' mr='2'>
          •
        </Text>
      )}

      <Text fontWeight='600' color='gray.700' fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
}
