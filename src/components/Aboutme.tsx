import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
// import Fade from 'react-reveal/Fade'
// import headshot from '../../media/headshot.jpg'

const Aboutme: FC = () => {
    return (
        <>
         <Element name='aboutme'>
            <Container maxW={'5xl'} /*p={6.75} mt={[20, 10]}*/>
                <VStack spacing={8}>
                    {/* <Fade> */}
                        <Heading as='h2'>About me</Heading>
                    {/* </Fade> */}
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        {/* <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        /> */}
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <motion.div
                                initial={{ opacity: 0 }} // Start with 0 opacity (invisible)
                                animate={{ opacity: 1 }} // Animate to 1 opacity (fully visible)
                                transition={{ duration: 2 }} // Animation duration (2 seconds)
                            >
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi, I'm Mahyar, a software developer with around 5 years of experience building <b> web and cloud </b> applications. I'm currently exploring
                                        the world of <b>AI</b> and <b>AI Agents</b>
                                    </Text>
                                </Flex>
                            
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                    I hold a <b> Bachelor  of Applied Science (BASc) </b> in Chemical Engineering from the <b> University of Waterloo </b> and have independently learned many modern technology stacks.
                                    </Text>
                                </Flex>
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                    I worked at Mindgeek as a <b>Cloud Software Developer</b>; building <b>batch</b> and <b>continuous processing</b> data pipelines in <b>PySpark</b>, <b>Beam</b> (<b>Java</b>) & <b>Pandas</b> (<b>Python</b>). I also built deployment pipelines (<b>CICD</b>) to maximize service availability.
                                    </Text>
                                </Flex>
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                    I have experience in full-stack web development, specializing in  <b>Python</b> and <b>Typescript</b> <b>ReactJS</b> is my preferred frontend framework, and I have worked on backend development using <b>Python</b> and <b>Java.</b>
                                    </Text>
                                </Flex>
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>🤖</Center>
                                    <Text>
                                    I enjoy working on a variety of projects, particularly those involving <b>LLMs.</b> Additionally, I have contributed to several projects showcased on my GitHub page.
                                    </Text>
                                </Flex>
                                </motion.div>
                            {/* </Fade> */}
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
        </>
    )
}

export default Aboutme