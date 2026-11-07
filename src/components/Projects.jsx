import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaExternalLinkAlt,
    FaBrain,
} from 'react-icons/fa'
import {
    SiNextdotjs,
    SiTailwindcss,
    SiSupabase,
    SiMongodb,
    SiExpress,
    SiJavascript,
    SiPython,
    SiPytorch,
} from 'react-icons/si'
import Section from './Section'
import SectionHeader from './SectionHeader'

const projects = [
    {
        type: 'Full-stack web app',
        title: 'Digital Heroes',
        description:
            'A full-stack platform with authentication, user profiles, subscriptions, scores, draws, winners and a complete admin workflow.',
        technologies: [
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
        ],
        liveUrl: 'https://digital-heroes01.netlify.app/',
        accent: '62,207,142',
        mark: SiSupabase,
    },
    {
        type: 'MERN application',
        title: 'MERN Blogging App',
        description:
            'A blogging platform where users create accounts, publish posts with images, explore topics, search content and interact with posts.',
        technologies: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E' },
            { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        ],
        liveUrl: 'https://blogging-web-aap.netlify.app/',
        accent: '97,218,251',
        mark: FaReact,
    },
    {
        type: 'AI research',
        title: 'ViT-HHO',
        description:
            'Diabetic retinopathy classification using a Vision Transformer tuned with Harris Hawks Optimization on the APTOS 2019 dataset.',
        technologies: [
            { name: 'Vision Transformer', icon: FaBrain, color: '#A78BFA' },
            { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
            { name: 'Python', icon: SiPython, color: '#5A9FD4' },
        ],
        caption: 'Research · APTOS 2019',
        accent: '167,139,250',
        mark: FaBrain,
    },
    {
        type: 'Personal project',
        title: 'Developer Portfolio',
        description:
            'This site — a fast, responsive portfolio built to showcase my skills, projects and journey, optimised for mobile performance.',
        technologies: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        ],
        githubUrl: 'https://github.com/mohammadfaheemmir/faheem-portfolio',
        caption: 'You are here',
        accent: '96,165,250',
        mark: SiJavascript,
    },
]

function hostname(url) {
    try {
        return new URL(url).hostname
    } catch {
        return url
    }
}

function ProjectPreview({ project }) {
    const Mark = project.mark
    const address = project.liveUrl ? hostname(project.liveUrl) : project.caption

    return (
        <div
            className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10"
            style={{
                background: `radial-gradient(120% 90% at 50% 0%, rgba(${project.accent},0.18) 0%, rgba(8,8,10,1) 70%)`,
            }}
        >
            {/* Window chrome */}
            <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-2.5">
                <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex-1 truncate rounded-md bg-white/[0.05] px-3 py-1 text-center text-[11px] text-slate-400">
                    {address}
                </div>
            </div>

            {/* Body */}
            <div className="absolute inset-x-0 bottom-0 top-10 flex flex-col items-center justify-center gap-4 px-6">
                <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 transition-transform duration-500 group-hover:scale-110"
                    style={{ boxShadow: `0 0 40px rgba(${project.accent},0.25)` }}
                >
                    <Mark size={26} color={`rgb(${project.accent})`} aria-hidden="true" />
                </div>
                <p className="text-xl sm:text-2xl font-semibold tracking-tight text-white/90">
                    {project.title}
                </p>
                <div className="flex w-2/3 max-w-[260px] flex-col gap-2 opacity-60" aria-hidden="true">
                    <span className="h-1.5 rounded-full bg-white/10" />
                    <span className="h-1.5 w-4/5 self-center rounded-full bg-white/[0.07]" />
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <Section id="projects">
            <SectionHeader
                label="Selected work"
                title="Things I've"
                highlight="built."
                description="Web applications, full-stack products and research work that show what I've been learning and shipping."
            />

            <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="reveal group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-3 sm:p-4 hover:border-white/20 transition-colors"
                    >
                        <ProjectPreview project={project} />

                        <div className="flex flex-1 flex-col px-2 pt-5 pb-2 sm:px-3">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80">
                                {project.type}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                                {project.title}
                            </h3>

                            <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                                {project.description}
                            </p>

                            <ul className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map(({ name, icon: Icon, color }) => (
                                    <li
                                        key={name}
                                        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-slate-300"
                                    >
                                        <Icon size={13} color={color} aria-hidden="true" />
                                        {name}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6 flex flex-wrap gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors"
                                    >
                                        Live demo
                                        <FaExternalLinkAlt size={11} aria-hidden="true" />
                                        <span className="sr-only">for {project.title} (opens in new tab)</span>
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/[0.06] transition-colors"
                                    >
                                        <FaGithub size={15} aria-hidden="true" />
                                        View source
                                    </a>
                                )}

                                {!project.liveUrl && !project.githubUrl && (
                                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-5 py-2.5 text-sm text-violet-200">
                                        <FaBrain size={13} aria-hidden="true" />
                                        Research project
                                    </span>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <p className="reveal mt-8 text-center text-sm text-slate-400">
                More on{' '}
                <a
                    href="https://github.com/mohammadfaheemmir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-blue-400"
                >
                    GitHub
                </a>
            </p>
        </Section>
    )
}

export default Projects
