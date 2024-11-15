import { Box, Heading, Text, VStack } from '@chakra-ui/react';

import bottom from './assets/image-bottom.png';
import full from './assets/image-full.png';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
function App() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'], // okresla trigger- pierwsza czaesc oznacza element a druga viewport. Czyli zaczynamy gdy srtart elementu spotka start viewport
    // a konczymy gdy end elementu spotka start viewport
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <VStack m={0} p={0} spacing={0}>
      <VStack w={'100%'} h={'100vh'} overflow={'hidden'} pos={'relative'} ref={container}>
        <motion.div
          style={{
            position: 'absolute',
            y: textY,
            zIndex: 10,
            top: '50%',
            translateY: '-50%',
            margin: 'auto',
          }}
        >
          <Heading color={'whiteAlpha.800'} fontSize={'9xl'} fontWeight={700}>
            PARALAX
          </Heading>
        </motion.div>

        <Box
          backgroundImage={full}
          inset={0}
          pos={'absolute'}
          backgroundPosition={'bottom'}
          backgroundSize={'cover'}
          w={'100%'}
          h={'100%'}
        />
        <motion.div
          style={{
            transform: `translateY(${backgroundY})`, // Zastosowanie translateY
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundImage: `url(${bottom})`,
            zIndex: 20,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        />
      </VStack>
      <VStack w={'100%'} spacing={20} bg={'#06141D'}>
        <Text color={'wheat'} w={'800px'} mt={20}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus debitis autem inventore saepe. Dolores
          minima esse quae soluta eos, in quam veniam labore ratione placeat, ducimus voluptates? Numquam officia unde
          optio ipsum assumenda possimus explicabo facilis culpa. Hic officia possimus, ipsa consequatur expedita unde.
          Ex facere velit enim, ullam autem obcaecati in, distinctio accusantium sapiente nemo ut quisquam quas odio
          dignissimos, amet repellat vitae aliquid est doloribus aperiam. Odio possimus qui quisquam perferendis eaque,
          sapiente necessitatibus cum deleniti blanditiis tempora et explicabo doloremque praesentium mollitia quae non
          quibusdam. Excepturi quo quasi dolorem in inventore laudantium quidem commodi, eos odio, incidunt modi itaque
          nulla fugit rerum ullam deleniti optio culpa iste! Exercitationem aperiam distinctio deleniti dolorum id,
          asperiores optio iusto odit vero necessitatibus quod unde molestiae corporis esse? Nesciunt illo vitae nemo
          cupiditate consectetur ut impedit, corrupti cumque ipsa molestias soluta, amet atque animi quos asperiores
          totam laborum. Facere ullam dicta eveniet odit harum labore porro? Mollitia, esse enim, veritatis aspernatur
          nam odio dolores labore commodi et molestias totam in voluptate blanditiis aliquam voluptatibus repudiandae
          voluptates, sint reprehenderit ratione. Est iste quam, quisquam reprehenderit architecto ipsa, fugit quod
          voluptatum quis perferendis illum quasi aspernatur asperiores quia, enim a consequuntur adipisci.
        </Text>
        <Text color={'wheat'} w={'800px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus debitis autem inventore saepe. Dolores
          minima esse quae soluta eos, in quam veniam labore ratione placeat, ducimus voluptates? Numquam officia unde
          optio ipsum assumenda possimus explicabo facilis culpa. Hic officia possimus, ipsa consequatur expedita unde.
          Ex facere velit enim, ullam autem obcaecati in, distinctio accusantium sapiente nemo ut quisquam quas odio
          dignissimos, amet repellat vitae aliquid est doloribus aperiam. Odio possimus qui quisquam perferendis eaque,
          sapiente necessitatibus cum deleniti blanditiis tempora et explicabo doloremque praesentium mollitia quae non
          quibusdam. Excepturi quo quasi dolorem in inventore laudantium quidem commodi, eos odio, incidunt modi itaque
          nulla fugit rerum ullam deleniti optio culpa iste! Exercitationem aperiam distinctio deleniti dolorum id,
          asperiores optio iusto odit vero necessitatibus quod unde molestiae corporis esse? Nesciunt illo vitae nemo
          cupiditate consectetur ut impedit, corrupti cumque ipsa molestias soluta, amet atque animi quos asperiores
          totam laborum. Facere ullam dicta eveniet odit harum labore porro? Mollitia, esse enim, veritatis aspernatur
          nam odio dolores labore commodi et molestias totam in voluptate blanditiis aliquam voluptatibus repudiandae
          voluptates, sint reprehenderit ratione. Est iste quam, quisquam reprehenderit architecto ipsa, fugit quod
          voluptatum quis perferendis illum quasi aspernatur asperiores quia, enim a consequuntur adipisci.
        </Text>
        <Text color={'wheat'} w={'800px'} mb={20}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus debitis autem inventore saepe. Dolores
          minima esse quae soluta eos, in quam veniam labore ratione placeat, ducimus voluptates? Numquam officia unde
          optio ipsum assumenda possimus explicabo facilis culpa. Hic officia possimus, ipsa consequatur expedita unde.
          Ex facere velit enim, ullam autem obcaecati in, distinctio accusantium sapiente nemo ut quisquam quas odio
          dignissimos, amet repellat vitae aliquid est doloribus aperiam. Odio possimus qui quisquam perferendis eaque,
          sapiente necessitatibus cum deleniti blanditiis tempora et explicabo doloremque praesentium mollitia quae non
          quibusdam. Excepturi quo quasi dolorem in inventore laudantium quidem commodi, eos odio, incidunt modi itaque
          nulla fugit rerum ullam deleniti optio culpa iste! Exercitationem aperiam distinctio deleniti dolorum id,
          asperiores optio iusto odit vero necessitatibus quod unde molestiae corporis esse? Nesciunt illo vitae nemo
          cupiditate consectetur ut impedit, corrupti cumque ipsa molestias soluta, amet atque animi quos asperiores
          totam laborum. Facere ullam dicta eveniet odit harum labore porro? Mollitia, esse enim, veritatis aspernatur
          nam odio dolores labore commodi et molestias totam in voluptate blanditiis aliquam voluptatibus repudiandae
          voluptates, sint reprehenderit ratione. Est iste quam, quisquam reprehenderit architecto ipsa, fugit quod
          voluptatum quis perferendis illum quasi aspernatur asperiores quia, enim a consequuntur adipisci.
        </Text>
      </VStack>
    </VStack>
  );
}

export default App;
