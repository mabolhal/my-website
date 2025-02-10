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
    SciKitLibBadge,
    OpenAILibBadge
} from '../components/Projects/TechBadges'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'

export const projectData: ProjectT[] = [
    {
        name: 'Chevu (coming soon)',
        id: 'chevu',
        type: 'Web app',
        tagline: 'Haircut scheduling platform',
        tags: [
            <ReactBadge />,
            <TypescriptBadge />,
            <NodeBadge />,
            <OpenAILibBadge />
        ],
        imageSrc: '/chevu.png',
        description: 'Web application that can be used to schedule Haircuts with registered barbers',
        links: [
            {
                link: 'https://github.com/mabolhal/haircut-scheduler',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/yourusername/chevu',
    },
    {
        name: 'May the best woman win',
        id: 'mtbww',
        type: 'Dash Web app',
        tagline: 'A pet adoption platform for animal shelters',
        tags: [<PythonBadge />, <BSLibBadge />, <SciKitLibBadge />],
        imageSrc: '/petpal.png',
        description:
            "Trained Linear Regression model to categorize comment sentiment, with comments scraped from Reddit\'s r/rpdr community + simple web UI",
        links: [
            {
                link: 'https://github.com/mabolhal/maythebestwomanwin',
                icon: <FiGithub />
            },
        ],
        headerLink: 'https://github.com/mabolhal/maythebestwomanwin',
    },
    // {
    //     name: 'Save this Week (coming soon)',
    //     id: 'stw',
    //     type: 'Web app',
    //     tagline: '',
    //     tags: [
    //         <PythonBadge />,
    //         <TypescriptBadge />,
    //         <ChakraLibBadge />,
    //         <OpenAILibBadge />
    //     ],
    //     imageSrc: '',
    //     description:
    //         'AI Agent that queriesweekly grocery flyers (Flipp) based on user prompt; powered by LLM model',
    //     headerLink: '',
    // }
]