import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaRobot,
    FaProjectDiagram,
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

function Skills() {
    const skillGroups = [
        {
            number: '01',
            title: 'Frontend',
            description:
                'Technologies I use to create modern, responsive and interactive interfaces.',
            skills: [
                {
                    name: 'HTML5',
                    icon: FaHtml5,
                    color: '#E34F26',
                },
                {
                    name: 'CSS3',
                    icon: FaCss3Alt,
                    color: '#1572B6',
                },
                {
                    name: 'JavaScript',
                    icon: FaJs,
                    color: '#F7DF1E',
                },
                {
                    name: 'React',
                    icon: FaReact,
                    color: '#61DAFB',
                },
                {
                    name: 'Next.js',
                    icon: SiNextdotjs,
                    color: '#FFFFFF',
                },
                {
                    name: 'Tailwind CSS',
                    icon: SiTailwindcss,
                    color: '#06B6D4',
                },
                {
                    name: 'Bootstrap',
                    icon: SiBootstrap,
                    color: '#7952B3',
                },
            ],
        },

        {
            number: '02',
            title: 'Backend & Cloud',
            description:
                'Technologies I use to build APIs, backend systems, databases and cloud-powered applications.',
            skills: [
                {
                    name: 'Node.js',
                    icon: FaNodeJs,
                    color: '#339933',
                },
                {
                    name: 'Express.js',
                    icon: SiExpress,
                    color: '#FFFFFF',
                },
                {
                    name: 'MongoDB',
                    icon: SiMongodb,
                    color: '#47A248',
                },
                {
                    name: 'PostgreSQL',
                    icon: SiPostgresql,
                    color: '#4169E1',
                },
                {
                    name: 'Supabase',
                    icon: SiSupabase,
                    color: '#3ECF8E',
                },
                {
                    name: 'Firebase',
                    icon: SiFirebase,
                    color: '#FFCA28',
                },
            ],
        },

        {
            number: '03',
            title: 'Programming',
            description:
                'Programming languages I use for development, problem solving and computer science fundamentals.',
            skills: [
                {
                    name: 'C++',
                    icon: SiCplusplus,
                    color: '#00599C',
                },
                {
                    name: 'Java',
                    icon: FaJava,
                    color: '#F89820',
                },
                {
                    name: 'JavaScript',
                    icon: FaJs,
                    color: '#F7DF1E',
                },
            ],
        },

        {
            number: '04',
            title: 'Data Structures & Algorithms',
            description:
                'Core problem-solving skills that help me break complex problems into smaller and manageable solutions.',
            skills: [
                {
                    name: 'Data Structures',
                    icon: FaProjectDiagram,
                    color: '#8B5CF6',
                },
                {
                    name: 'Algorithms',
                    icon: FaProjectDiagram,
                    color: '#EC4899',
                },
                {
                    name: 'Problem Solving',
                    icon: FaProjectDiagram,
                    color: '#14B8A6',
                },
            ],
        },

        {
            number: '05',
            title: 'Agentic Coding',
            description:
                'AI-assisted development workflows using coding agents to explore, implement, debug and improve applications.',
            skills: [
                {
                    name: 'Claude Code',
                    icon: FaRobot,
                    color: '#D97757',
                },
                {
                    name: 'OpenAI Codex',
                    icon: FaRobot,
                    color: '#10A37F',
                },
                {
                    name: 'AI Development',
                    icon: FaRobot,
                    color: '#8B5CF6',
                },
                {
                    name: 'Agentic Workflows',
                    icon: FaRobot,
                    color: '#06B6D4',
                },
            ],
        },

        {
            number: '06',
            title: 'Tools',
            description:
                'Development tools and platforms I use throughout my workflow.',
            skills: [
                {
                    name: 'Git',
                    icon: FaGitAlt,
                    color: '#F05032',
                },
                {
                    name: 'GitHub',
                    icon: FaGithub,
                    color: '#FFFFFF',
                },
                {
                    name: 'VS Code',
                    icon: VscVscode,
                    color: '#007ACC',
                },
                {
                    name: 'Postman',
                    icon: SiPostman,
                    color: '#FF6C37',
                },
            ],
        },
    ]

    return (
        <section
            id="skills"
            className="relative px-5 sm:px-8 lg:px-12 py-28 lg:py-40"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section label */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="h-px w-10 bg-blue-400" />

                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Skills & Technologies
                    </p>
                </div>

                {/* Main heading */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    <div className="lg:col-span-7">
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] leading-[0.95]">
                            Technologies I use
                            <span className="gradient-text">
                                {' '}to build.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-3">
                        <p className="text-lg leading-8 text-slate-400">
                            A collection of technologies, programming skills and
                            modern AI development tools I use to build and solve
                            real-world problems.
                        </p>
                    </div>

                </div>

                {/* Skill groups */}
                <div className="mt-20 space-y-5">

                    {skillGroups.map((group) => (
                        <div
                            key={group.number}
                            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10 hover:bg-white/[0.05] transition-colors duration-300"
                        >

                            {/* Group header */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

                                <div className="lg:col-span-4">

                                    <span className="text-xs text-slate-600">
                                        {group.number}
                                    </span>

                                    <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                                        {group.title}
                                    </h3>

                                </div>

                                <div className="lg:col-span-5 lg:col-start-8">

                                    <p className="text-slate-500 leading-7">
                                        {group.description}
                                    </p>

                                </div>

                            </div>

                            {/* Technology cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

                                {group.skills.map((skill) => {
                                    const Icon = skill.icon

                                    return (
                                        <div
                                            key={skill.name}
                                            className="group relative min-h-[145px] rounded-2xl border border-white/10 bg-black/30 p-5 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:border-white/25 transition-all duration-300"
                                        >

                                            {/* Colored glow */}
                                            <div
                                                className="absolute -right-10 -top-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                                style={{
                                                    backgroundColor: skill.color,
                                                }}
                                            />

                                            {/* Icon */}
                                            <div className="relative">

                                                <Icon
                                                    size={40}
                                                    color={skill.color}
                                                    className="group-hover:scale-110 transition-transform duration-300"
                                                />

                                            </div>

                                            {/* Skill name */}
                                            <div className="relative">

                                                <p className="text-sm font-medium text-slate-200">
                                                    {skill.name}
                                                </p>

                                                <div
                                                    className="mt-2 h-0.5 w-0 group-hover:w-8 transition-all duration-300"
                                                    style={{
                                                        backgroundColor: skill.color,
                                                    }}
                                                />

                                            </div>

                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="mt-5 rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/[0.08] to-violet-500/[0.08] p-8 sm:p-10">

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

                        <div>

                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                My approach
                            </p>

                            <p className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                                Learn it. Build it. Improve it.
                            </p>

                        </div>

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]"
                        >
                            Explore Projects
                            <span>↗</span>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills