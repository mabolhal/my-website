import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { Typewriter } from "react-simple-typewriter";

export function Header() {
    return (
    <Box as='section' color='#F7FAFC' bg='#6B46C1' pt='90px' pb='198px' px='32px' textAlign='center'>
        <Heading fontWeight='500' fontSize='48px'>
        <Typewriter
          words={["Simple pricing for your business"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={150}
          deleteSpeed={50}
          />
        </Heading>
        <Text fontWeight='400' fontSize='20px' color='#F7FAFC'>
            Plans that are carefully crafted to suit your business.
        </Text>
    </Box>
    )
}