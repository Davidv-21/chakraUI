import { Box, Heading, Button, Flex, Stack } from '@chakra-ui/react'
import bgImage from './resources/images/portada-movilidad-electrica.jpg'

function App() {
  return (
    <Box
      h='40vh'
      bg='green'
      bgImage={`url(${bgImage})`}
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Flex
        direction='column' 
        alignItems='center'
        justify='center'
        h='100%'
        bg='rgb(0 0 0 / 50%)' 
        p={['0 10%', null, '0 20%']}
      >
        <Heading
          variant='banner'
        >
          Domina el terreno
        </Heading>
        <Stack
          direction={{base: 'column', md: 'row'}}
          spacing='40px'
          nt='30px'
          w={['100%', null, 'auto']}
        >
          <Button
            variant='outline'
            size='lg'
            
          >
            ver detalles
          </Button>
          <Button
            variant='outline'
            size='lg'
            
          >
            ver video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;

