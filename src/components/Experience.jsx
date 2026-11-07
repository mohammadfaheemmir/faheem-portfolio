import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import Section from './Section'
import SectionHeader from './SectionHeader'

const timeline = [
    {
        kind: 'work',
        period: '2026 — Present',
        title: 'Web Developer',
        organization: 'Independent & academic projects',
        description:
            'Building responsive, full-stack web applications with React, Next.js, Node.js, Express, MongoDB, Supabase and Tailwind CSS.',
        points: [
            'Built Digital Heroes, a Next.js + Supabase platform with authentication, subscriptions, scores, draws and an admin workflow.',
            'Developed a MERN blogging platform with accounts, image posts, topics, search and post interactions.',
            'Researched diabetic retinopathy classification with a Vision Transformer optimised by Harris Hawks Optimization (ViT-HHO).',
        ],
    },
    {
        kind: 'education',
        period: '2024 — 2026',
        title: 'Master of Computer Applications (MCA)',
        organization: 'Postgraduate degree',
        description:
            'Focused on software development, web technologies, databases, artificial intelligence and network security, applied through academic and practical projects.',
    },
    {
        kind: 'education',
        period: '2021 — 2024',
        title: 'Bachelor of Computer Applications (BCA)',
        organization: 'Undergraduate degree',
        description:
            'Built a strong foundation in programming, web development, databases, data structures, computer networks and software engineering.',
    },
]

function Experience() {
    return (
        <Section id="experience">
            <SectionHeader
                label="Experience"
                title="My journey"
                highlight="so far."
                description="From full-stack applications to AI research — turning what I learn into practical, working software."
            />

            <ol className="mt-12 lg:mt-16 relative border-l border-white/10 ml-5 sm:ml-6 space-y-6">
                {timeline.map((item) => {
                    const Icon = item.kind === 'work' ? FaBriefcase : FaGraduationCap

                    return (
                        <li key={item.title} className="reveal relative pl-9 sm:pl-12">
                            <span className="absolute -left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0b0d] text-emerald-300">
                                <Icon size={14} aria-hidden="true" />
                            </span>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
                                    </div>
                                    <span className="shrink-0 self-start rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                                        {item.period}
                                    </span>
                                </div>

                                <p className="mt-4 text-[15px] leading-relaxed text-slate-400 max-w-3xl">
                                    {item.description}
                                </p>

                                {item.points && (
                                    <ul className="mt-4 space-y-2.5 max-w-3xl">
                                        {item.points.map((point) => (
                                            <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ol>
        </Section>
    )
}

export default Experience
