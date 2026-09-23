import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaDatabase,
    FaExternalLinkAlt,
    FaBrain,
} from 'react-icons/fa'

import {
    SiNextdotjs,
    SiTailwindcss,
    SiSupabase,
    SiMongodb,
    SiExpress,
    SiPostgresql,
    SiJavascript,
    SiPython,
    SiPytorch,
} from 'react-icons/si'

function Projects() {
    const projects = [
        {
            number: '01',
            featured: true,
            type: 'Personal Project',
            title: 'Personal Portfolio',
            description:
                'A modern developer portfolio designed to showcase my skills, projects, education and development journey through a clean dark visual experience.',
            technologies: [
                {
                    name: 'React',
                    icon: FaReact,
                    color: '#61DAFB',
                },
                {
                    name: 'Tailwind CSS',
                    icon: SiTailwindcss,
                    color: '#06B6D4',
                },
                {
                    name: 'JavaScript',
                    icon: SiJavascript,
                    color: '#F7DF1E',
                },
            ],
            liveUrl: '#',
            githubUrl: '',
            visual: 'PORTFOLIO',
            visualLabel: 'Developer Portfolio',
        },

        {
            number: '02',
            featured: false,
            type: 'Web Application',
            title: 'Digital Heroes',
            description:
                'A full-stack web application built with Next.js and Supabase, featuring authentication, profiles, subscriptions, scores, draws, winners and an admin workflow.',
            technologies: [
                {
                    name: 'Next.js',
                    icon: SiNextdotjs,
                    color: '#FFFFFF',
                },
                {
                    name: 'Supabase',
                    icon: SiSupabase,
                    color: '#3ECF8E',
                },
                {
                    name: 'Tailwind CSS',
                    icon: SiTailwindcss,
                    color: '#06B6D4',
                },
            ],
            liveUrl: 'https://digital-heroes01.netlify.app/',
            githubUrl: '',
            visual: 'DIGITAL',
            visualLabel: 'Digital Heroes',
        },

        {
            number: '03',
            featured: false,
            type: 'MERN Application',
            title: 'MERN Blogging App',
            description:
                'A blogging platform where users can create accounts, publish posts with images and text, explore different topics, search content and interact with other posts.',
            technologies: [
                {
                    name: 'React',
                    icon: FaReact,
                    color: '#61DAFB',
                },
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
            ],
            liveUrl: 'https://blogging-web-aap.netlify.app/',
            githubUrl: '',
            visual: 'BLOG',
            visualLabel: 'MERN Blogging',
        },

        {
            number: '04',
            featured: false,
            type: 'Research Project',
            title: 'ViT-HHO',
            description:
                'A research project for diabetic retinopathy classification using a Vision Transformer optimized with Harris Hawks Optimization on the APTOS 2019 dataset.',
            technologies: [
                {
                    name: 'Vision Transformer',
                    icon: FaBrain,
                    color: '#8B5CF6',
                },
                {
                    name: 'PyTorch',
                    icon: SiPytorch,
                    color: '#EE4C2C',
                },
                {
                    name: 'Python',
                    icon: SiPython,
                    color: '#3776AB',
                },
            ],
            liveUrl: '',
            githubUrl: '',
            visual: 'ViT',
            visualLabel: 'AI Research',
        },
    ]

    return (
        <section
            id="projects"
            className="relative px-5 sm:px-8 lg:px-12 py-28 lg:py-40"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section label */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="h-px w-10 bg-violet-400" />

                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Selected Work
                    </p>
                </div>

                {/* Heading */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    <div className="lg:col-span-7">
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] leading-[0.95]">
                            Things I've
                            <span className="gradient-text">
                                {' '}built.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-3">
                        <p className="text-lg leading-8 text-slate-400">
                            A selection of web applications, development projects
                            and research work that represent what I've been
                            learning and building.
                        </p>
                    </div>

                </div>

                {/* Projects */}
                <div className="mt-20 space-y-5">

                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] ${project.featured
                                    ? 'p-5 sm:p-7 lg:p-8'
                                    : 'p-5 sm:p-7'
                                } hover:border-white/20 transition-all duration-300`}
                        >

                            <div
                                className={`grid grid-cols-1 ${project.featured
                                        ? 'lg:grid-cols-2'
                                        : 'lg:grid-cols-[0.85fr_1.15fr]'
                                    } gap-8 lg:gap-12 items-center`}
                            >

                                {/* Project visual */}
                                <div
                                    className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 ${project.featured
                                            ? 'min-h-[320px] lg:min-h-[430px]'
                                            : 'min-h-[270px]'
                                        }`}
                                >

                                    {/* Background glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.12] via-transparent to-violet-500/[0.12]" />

                                    {/* Decorative grid */}
                                    <div
                                        className="absolute inset-0 opacity-[0.08]"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                                            backgroundSize: '35px 35px',
                                        }}
                                    />

                                    {/* Number */}
                                    <div className="absolute top-6 left-6 text-xs text-slate-600">
                                        {project.number}
                                    </div>

                                    {/* Center content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">

                                        <div className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.08em] text-white/[0.08]">
                                            {project.visual}
                                        </div>

                                        <div className="mt-4 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm">
                                            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                                {project.visualLabel}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                {/* Project information */}
                                <div>

                                    {/* Type + number */}
                                    <div className="flex items-center justify-between gap-4">

                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] uppercase tracking-[0.15em] text-slate-400">
                                            {project.type}
                                        </span>

                                        <span className="text-xs text-slate-600">
                                            {project.number}
                                        </span>

                                    </div>

                                    {/* Title */}
                                    <h3
                                        className={`mt-7 font-semibold tracking-tight ${project.featured
                                                ? 'text-4xl sm:text-5xl'
                                                : 'text-3xl sm:text-4xl'
                                            }`}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 text-base sm:text-lg text-slate-500 leading-8 max-w-xl">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-7 flex flex-wrap gap-2">

                                        {project.technologies.map((tech) => {
                                            const Icon = tech.icon

                                            return (
                                                <div
                                                    key={tech.name}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-black/20"
                                                >
                                                    <Icon
                                                        size={16}
                                                        color={tech.color}
                                                    />

                                                    <span className="text-xs text-slate-400">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            )
                                        })}

                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-8 flex flex-wrap items-center gap-3">

                                        {project.liveUrl ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-400 text-black text-sm font-medium hover:bg-emerald-300 transition"
                                            >
                                                Live Demo
                                                <FaExternalLinkAlt size={12} />
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-violet-400/20 bg-violet-400/[0.08] text-violet-300 text-sm">
                                                <FaBrain size={14} />
                                                Research Project
                                            </span>
                                        )}

                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm hover:bg-white/[0.08] transition"
                                            >
                                                <FaGithub size={15} />
                                                GitHub
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

                {/* Bottom statement */}
                <div className="mt-5 rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/[0.07] to-violet-500/[0.07] p-8 sm:p-10">

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                More to come
                            </p>

                            <p className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                                Always building something new.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.04] text-white text-sm font-medium hover:bg-white/[0.08] transition"
                        >
                            Let's connect
                            <span>↗</span>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects