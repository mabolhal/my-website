import {
    FirebaseBadge,
    JavaBadge,
    MongoBadge,
    MySQLBadge,
    NodeBadge,
    PHPBadge,
    PythonBadge,
    ReactBadge,
    AssemblyBadge,
    DjangoBadge,
    TypescriptBadge,
    BSLibBadge,
    ChakraLibBadge,
    SciKitLibBadge
} from '../components/Projects/TechBadges.tsx'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'

export const projectData: ProjectT[] = [
    {
        name: 'May the best woman win',
        id: 'mtbww',
        type: 'Dash Web app',
        tagline: 'A pet adoption platform for animal shelters',
        tags: [<PythonBadge />, <BSLibBadge />, <SciKitLibBadge />],
        imageSrc: '/petpal.png',
        description:
            'A pet adoption platform for animal shelters and prospective adopters featuring an admin dashboard, a customized application process, a REST API, and a frontend built with Tailwind.',
        links: [
            {
                link: 'https://github.com/leowrites/PetPal',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/leowrites/PetPal',
    },
    {
        name: 'Save this Week',
        id: 'stw',
        type: 'Web app',
        tagline: 'Suggests places to visit tailored using your preferences',
        tags: [
            <ReactBadge />,
            <TypescriptBadge />,
            <ChakraLibBadge />
        ],
        imageSrc: '/street-savvy.jpg',
        description:
            'A web app that suggests places to visit in Toronto based on your preferences using a custom recommendation engine and data from the Google Places API. Submitted to UofTHacks X.',
        links: [
            {
                link: '',
                icon: <FiGithub />,
            },
        ],
        headerLink: '',
    }
]