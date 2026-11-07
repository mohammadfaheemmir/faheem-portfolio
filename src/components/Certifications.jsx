import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'
import { SiMeta } from 'react-icons/si'
import Section from './Section'
import SectionHeader from './SectionHeader'

const certifications = [
    {
        title: 'Cyber Job Simulation',
        issuer: 'Deloitte',
        platform: 'Forage',
        category: 'Cybersecurity',
        date: 'Sep 2026',
        description:
            'Completed practical cybersecurity tasks as part of the Deloitte Cyber Job Simulation.',
        icon: FaBriefcase,
        iconColor: '#86BC25',
    },
    {
        title: 'Tech Explorer Job Simulation',
        issuer: 'Forage',
        platform: 'Forage',
        category: 'Technology',
        date: 'Sep 2026',
        description:
            'Practical tasks covering software engineering, technology analysis, cybersecurity and data science.',
        icon: FaBriefcase,
        iconColor: '#A78BFA',
    },
    {
        title: 'Introduction to Front-End Development',
        issuer: 'Meta',
        platform: 'Coursera',
        category: 'Frontend',
        date: 'Feb 2023',
        description:
            'Online non-credit course authorised by Meta and offered through Coursera.',
        icon: SiMeta,
        iconColor: '#3B9BFF',
        verification: 'https://coursera.org/verify/AE82U9PD7P67',
    },
    {
        title: 'Programming with JavaScript',
        issuer: 'Meta',
        platform: 'Coursera',
        category: 'JavaScript',
        date: 'Mar 2023',
        description:
            'Online non-credit course authorised by Meta and offered through Coursera.',
        icon: SiMeta,
        iconColor: '#3B9BFF',
        verification: 'https://coursera.org/verify/P8XEBLSNFZ78',
    },
]

function Certifications() {
    return (
        <Section id="certifications">
            <SectionHeader
                label="Certifications"
                title="Credentials"
                highlight="I've earned."
                description="Professional courses and practical job simulations that complement my hands-on project work."
            />

            <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => {
                    const IssuerIcon = cert.icon

                    return (
                        <article
                            key={cert.title}
                            className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 hover:border-white/20 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                                        <IssuerIcon size={20} color={cert.iconColor} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-100">{cert.issuer}</p>
                                        <p className="text-xs text-slate-400">
                                            via {cert.platform} · {cert.date}
                                        </p>
                                    </div>
                                </div>

                                <span className="hidden sm:inline-block shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                                    {cert.category}
                                </span>
                            </div>

                            <h3 className="mt-5 text-xl font-semibold tracking-tight">{cert.title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{cert.description}</p>

                            {cert.verification && (
                                <a
                                    href={cert.verification}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors"
                                >
                                    Verify credential
                                    <FaExternalLinkAlt size={10} aria-hidden="true" />
                                    <span className="sr-only">for {cert.title} (opens in new tab)</span>
                                </a>
                            )}
                        </article>
                    )
                })}
            </div>
        </Section>
    )
}

export default Certifications
