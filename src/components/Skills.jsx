import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
} from 'react-icons/fa'
import {
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiSupabase,
    SiFirebase,
    SiPostman,
    SiCplusplus,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import Section from './Section'
import SectionHeader from './SectionHeader'

const skillGroups = [
    {
        title: 'Frontend',
        description: 'Modern, responsive and accessible interfaces.',
        skills: [
            { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: FaCss3Alt, color: '#2965F1' },
            { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
            { name: 'Bootstrap', icon: SiBootstrap, color: '#A78BFA' },
        ],
    },
    {
        title: 'Backend & Databases',
        description: 'APIs, authentication, data modelling and cloud services.',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E' },
            { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#6B8FE8' },
            { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        ],
    },
    {
        title: 'Languages & Fundamentals',
        description: 'Computer-science foundations behind the code I write.',
        skills: [
            { name: 'C++', icon: SiCplusplus, color: '#659AD2' },
            { name: 'Java', icon: FaJava, color: '#F89820' },
            { name: 'Data Structures' },
            { name: 'Algorithms' },
            { name: 'Problem Solving' },
        ],
    },
    {
        title: 'AI-Assisted Development',
        description: 'Using coding agents to explore, implement, debug and improve.',
        skills: [
            { name: 'Claude Code' },
            { name: 'OpenAI Codex' },
            { name: 'Agentic Workflows' },
            { name: 'AI Development' },
        ],
    },
    {
        title: 'Tools',
        description: 'Everyday workflow and collaboration.',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
            { name: 'VS Code', icon: VscVscode, color: '#3B9EE8' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        ],
        wide: true,
    },
]

function Skills() {
    return (
        <Section id="skills">
            <SectionHeader
                label="Skills"
                title="Technologies I use"
                highlight="to build."
                description="The languages, frameworks and tools I rely on to design, build and ship real-world applications."
            />

            <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className={`reveal rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 ${group.wide ? 'md:col-span-2' : ''}`}
                    >
                        <h3 className="text-lg font-semibold">{group.title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{group.description}</p>

                        <ul className="mt-5 flex flex-wrap gap-2">
                            {group.skills.map(({ name, icon: Icon, color }) => (
                                <li
                                    key={name}
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-slate-200 hover:border-white/25 transition-colors"
                                >
                                    {Icon ? (
                                        <Icon size={16} color={color} aria-hidden="true" />
                                    ) : (
                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                                    )}
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skills
