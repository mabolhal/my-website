import { FC } from 'react'
import {
    VStack,
    Container,
    Heading,
    Wrap,
    WrapItem,
    Button,
    useMediaQuery,
} from '@chakra-ui/react'
import ProjectCard from './ProjectCard.tsx'
import { Element } from 'react-scroll'
// import Fade from 'react-reveal/Fade'
// import { motion } from 'framer-motion'
import LinkIconButton from './LinkIconButton.tsx'
import { projectData } from '../data/projectData.tsx'
import { Link } from 'react-router-dom'
// const Scroll = require('react-scroll')
// const scroll = Scroll.animateScroll

const Projects: FC = () => {
    const [isMobile] = useMediaQuery('(min-width: 764px)')

    return (
    //     <motion.div
    //     initial={{ opacity: 0 }} // Start with 0 opacity (invisible)
    //     animate={{ opacity: 1 }} // Animate to 1 opacity (fully visible)
    //     transition={{ duration: 2 }} // Animation duration (2 seconds)
    // >
         <Element name='projects'> 
            <Container
                maxW={'10xl'}
                p={6.75}
                mt={20}
                mb={[10, 20]}
                px={[0, 10]}
            >
                <VStack spacing={0}>
                    {/* <Fade> */}
                        <Heading as='h2'>Featured Projects</Heading>
                    {/* </Fade> */}
                    <Wrap spacing={0} justify='center'>
                        {
                        projectData.slice(0, isMobile ? 6 : 3).map(data => (
                            <WrapItem p={5}>
                                <ProjectCard
                                    name={data['name'] || ''}
                                    type={''}
                                    id={data['id'] || ''}
                                    tags={data['tags'] || []}
                                    imageSrc={data['imageSrc'] || ''}
                                    description={data['description'] || ''}
                                    links={data['links']?.map(link => (
                                        <LinkIconButton
                                            href={link.link}
                                            icon={link.icon}
                                        />
                                    ))}
                                    headerLink={data['headerLink'] || ''}
                                />
                            </WrapItem>
                        ))
                        }
                    </Wrap>
                </VStack>
            </Container>
        </Element>
        // </motion.div>
    )
}

export default Projects