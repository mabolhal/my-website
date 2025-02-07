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
            'Trained Linear Regression model to categorize comment sentiment, with comments scraped from Reddit’s r/rpdr community + simple web UI',
                    links: [
            {
                link: 'https://github.com/mabolhal/maythebestwomanwin',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/mabolhal/maythebestwomanwin',
    },
    {
        name: 'Save this Week (coming soon)',
        id: 'stw',
        type: 'Web app',
        tagline: '',
        tags: [
            <ReactBadge />,
            <TypescriptBadge />,
            <ChakraLibBadge />
        ],
        imageSrc: '',
        description:
            'AI Agent that queriesweekly grocery flyers (Flipp) based on user prompt; powered by LLM model',
        headerLink: '',
    }
]