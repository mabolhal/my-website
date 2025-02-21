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
                        <VStack spacing={8} p={[10, 4]} pl={[10, 50]}>
                            <motion.div
                                initial={{ opacity: 0 }} // Start with 0 opacity (invisible)
                                animate={{ opacity: 1 }} // Animate to 1 opacity (fully visible)
                                transition={{ duration: 2 }} // Animation duration (2 seconds)
                            >
                                {/* Introduction */}
                                <Flex mb={8}>
                                    <Center p={4} fontSize="2xl">👋🏼</Center>
                                    <Text>
                                        Hi, I'm Mahyar, a software developer with over <b>5 years of experience</b> building <b>web and cloud applications</b>. Initially started out in a client-facing role, and eventually transitioned the realm of engineering. I'm currently exploring the transformative potential of <b>AI</b> and <b>LLMs</b> in software development.
                                    </Text>
                                </Flex>

                                {/* Education & Background */}
                                <VStack align="stretch" spacing={4} mb={8}>
                                    <Flex>
                                        <Center p={4} fontSize="2xl">🎓</Center>
                                        <Text>
                                            <b>Education:</b>
                                            <br />• Bachelor of Applied Science (BASc) in Chemical Engineering - <b>University of Waterloo</b>
                                            <br />• Self-taught expertise in modern technology stacks
                                            <br />• Continuous learning in AI/ML technologies
                                        </Text>
                                    </Flex>
                                </VStack>

                                {/* Professional Experience */}
                                <VStack align="stretch" spacing={4} mb={8}>
                                    <Flex>
                                        <Center p={4} fontSize="2xl">👨🏻‍💻</Center>
                                        <Text>
                                            <b>Cloud Software Development:</b>
                                            <br />• Built high-performance data pipelines using <b>PySpark</b> and <b>Apache Beam</b>
                                            <br />• Implemented <b>CICD pipelines</b> for continuous deployment to <b>AWS</b>, <b>GCP</b>, and <b>Azure</b>
                                            <br />• Developed data processing solutions in <b>Python</b> and <b>Java</b>
                                        </Text>
                                    </Flex>
                                </VStack>

                                {/* Technical Skills */}
                                <VStack align="stretch" spacing={4} mb={8}>
                                    <Flex>
                                        <Center p={4} fontSize="2xl">🚀</Center>
                                        <Text>
                                            <b>Full-Stack Development:</b>
                                            <br />• Frontend: <b>ReactJS</b>, <b>TypeScript</b>, responsive design
                                            <br />• Backend: <b>Python</b>, <b>Java</b>, RESTful APIs
                                            <br />• Integrations: <b>Shopify</b>, <b>Snowflake</b>, cloud platforms
                                        </Text>
                                    </Flex>
                                </VStack>

                                {/* Current Focus */}
                                <VStack align="stretch" spacing={4}>
                                    <Flex>
                                        <Center p={4} fontSize="2xl">🤖</Center>
                                        <Text>
                                            <b>AI & Innovation:</b>
                                            <br />• Developing AI-powered scheduling application with <b>LLM integration</b>
                                            <br />• Building intelligent automation solutions using <b>AI agents</b>
                                        </Text>
                                    </Flex>
                                </VStack>
                            </motion.div>
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
        </>
    )
}

export default Aboutme