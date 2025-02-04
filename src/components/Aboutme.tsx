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
// import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
// import Fade from 'react-reveal/Fade'
// import headshot from '../../media/headshot.jpg'

const Aboutme: FC = () => {
    return (
        <>
        {/* // <Element name='aboutme'> */}
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
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
                                        Hi, I'm Mahyar, a software developer with around 5 years of experience building <b> web and cloud </b> applications 
                                    </Text>
                                </Flex>
                            
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I graduated from the University of Waterloo with Bachelor's of Applied Science (BASc) in Chemical Engineering
                                    </Text>
                                </Flex>
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        I am currently a <b>Software Developer at theScore</b> and I have previously held a position as a{' '}
                                        <b>
                                            Software Engineering Intern at
                                            NerveX
                                        </b>{' '}
                                        working in full-stack development. I also have experience as a developer at various student organizations, including <b>UofT Blueprint, UTMIST,</b> and <b>UofT AI</b>.
                                    </Text>
                                </Flex>
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced in full-stack web
                                        development - particularly with{' '}
                                        <b>Typescript</b> and <b>Python</b>.{' '}
                                        <b>ReactJS</b> is my frontend framework
                                        of choice and I've worked in backend
                                        with{' '}
                                        <b>NodeJS, .NET Core, Java,</b> and <b>Python</b>.
                                    </Text>
                                </Flex>
                            {/* </Fade> */}
                            {/* <Fade bottom cascade duration={500}> */}
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        In addition to Software Engineering, I
                                        am also interested in the confluence of
                                        artificial intelligence and cognitive
                                        science, as well as photography! Check
                                        out my&nbsp;
                                        <Link
                                            href=''
                                            isExternal
                                            fontWeight={'semibold'}
                                            borderBottom={
                                                '2px solid rgb(154, 228, 217)'
                                            }
                                            transition={'0.2s'}
                                            _hover={{
                                                textDecor: 'none',
                                                opacity: 0.9,
                                            }}
                                        >
                                            photography portfolio to learn more
                                            about my creative work.
                                        </Link>
                                    </Text>
                                </Flex>
                                </motion.div>
                            {/* </Fade> */}
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        {/* </Element> */}
        </>
    )
}

export default Aboutme