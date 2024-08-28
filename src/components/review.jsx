import { useEffect, useState } from 'react'
import { Box, Fade, Text } from '@chakra-ui/react'
import Contact from './contact'
import yy from '../assets/images/yy.png'

const Review = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div id="review" className="w-full h-screen overflow-auto">
      <Fade in>
        <Box
          // className="inset-0 bg-black opacity-80"
          position="relative"
          backgroundImage={`url(${yy.src})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundAttachment="fixed"
          overflow="hidden"
        >
          <Box
            position="absolute"
            width="100%"
            height="70%"
            opacity="0.5"
            backgroundColor="blue.900"
          />
          <Box
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            height="70%"
            color="white"
            fontWeight="light"
            padding="2rem"
          >
            <Box width={{ base: '100%', sm: '50%' }}>
              <Box className="flex flex-col justify-center items-center">
                <Text
                  fontSize={{ base: '4xl', sm: '5xl' }}
                  lineHeight="shorter"
                  marginBottom="1.5rem"
                >
                  {/* <p className="text-8xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
                    contacts
                  </p> */}
                  <p className="hidden sm:block text-4xl text-white font-bold text-center z-20 relative capitalize mt-7 sm:mt-14 dark:text-gray-300 ">
                    get in touch now
                  </p>

                  <p className="hidden sm:block text-2xl text-white font-bold text-center z-20 relative capitalize mt-4 sm:mt-14 dark:text-gray-300 ">
                    Contact Meshrak Real Estate today to explore exclusive deals <br/> and make your dream home a reality!
                  </p>

                </Text>
              </Box>
              <Text fontSize={{ base: 'lg', sm: '2xl' }}></Text>
            </Box>
            <Box
              width={{ base: '100%', sm: '70%' }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              marginTop={{ base: '2rem', sm: '0' }}
              overflow="none"
            >
              <Contact className="overflow-none" />
            </Box>
          </Box>
        </Box>
      </Fade>
    </div>
  )
}

export default Review