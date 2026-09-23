import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { SiMeta } from 'react-icons/si'

function Certifications() {
    const certifications = [
        {
            number: '01',
            title: 'Cyber Job Simulation',
            issuer: 'Deloitte',
            platform: 'Forage',
            category: 'Cybersecurity',
            date: 'September 9, 2026',
            description:
                'Completed practical tasks in cybersecurity as part of the Deloitte Cyber Job Simulation.',
            icon: FaBriefcase,
            iconColor: '#86BC25',
            verification: null,
        },

        {
            number: '02',
            title: 'Tech Explorer Job Simulation',
            issuer: 'Forage',
            platform: 'Forage',
            category: 'Technology',
            date: 'September 9, 2026',
            description:
                'Completed practical tasks covering software engineering, technology analysis, cybersecurity and data science.',
            icon: FaBriefcase,
            iconColor: '#7C3AED',
            verification: null,
        },

        {
            number: '03',
            title: 'Introduction to Front-End Development',
            issuer: 'Meta',
            platform: 'Coursera',
            category: 'Frontend Development',
            date: 'February 9, 2023',
            description:
                'Completed an online non-credit course authorized by Meta and offered through Coursera.',
            icon: SiMeta,
            iconColor: '#0081FB',
            verification:
                'https://coursera.org/verify/AE82U9PD7P67',
        },

        {
            number: '04',
            title: 'Programming with JavaScript',
            issuer: 'Meta',
            platform: 'Coursera',
            category: 'JavaScript',
            date: 'March 25, 2023',
            description:
                'Completed an online non-credit course authorized by Meta and offered through Coursera.',
            icon: SiMeta,
            iconColor: '#0081FB',
            verification:
                'https://coursera.org/verify/P8XEBLSNFZ78',
        },
    ]

    return (
        <section
            id="certifications"
            className="relative px-5 sm:px-8 lg:px-12 py-28 lg:py-40"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section label */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="h-px w-10 bg-emerald-400"></span>

                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Certifications
                    </p>
                </div>

                {/* Heading */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    <div className="lg:col-span-7">
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] leading-[0.95]">
                            Credentials
                            <span className="gradient-text">
                                {' '}I've earned.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-3">
                        <p className="text-lg leading-8 text-slate-400">
                            Professional certifications and practical learning
                            experiences that complement my technical skills.
                        </p>
                    </div>

                </div>

                {/* Certification cards */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">

                    {certifications.map((cert) => {
                        const IssuerIcon = cert.icon

                        return (
                            <article
                                key={cert.number}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                            >

                                {/* Glow */}
                                <div
                                    className="absolute -right-20 -top-20 w-56 h-56 rounded-full blur-3xl opacity-10 pointer-events-none"
                                    style={{
                                        backgroundColor: cert.iconColor,
                                    }}
                                />

                                <div className="relative">

                                    {/* Top row */}
                                    <div className="flex items-center justify-between">

                                        <span className="text-xs text-slate-600">
                                            {cert.number}
                                        </span>

                                        <span className="px-3 py-1.5 rounded-full border border-white/10 bg-black/20 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                                            {cert.category}
                                        </span>

                                    </div>

                                    {/* Issuer branding */}
                                    <div className="mt-7 flex items-center gap-4">

                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-black/30"
                                        >
                                            <IssuerIcon
                                                size={30}
                                                color={cert.iconColor}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-slate-200">
                                                {cert.issuer}
                                            </p>

                                            <p className="text-xs text-slate-500 mt-1">
                                                Issued / provided through {cert.platform}
                                            </p>
                                        </div>

                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-7 text-2xl sm:text-3xl font-semibold tracking-tight">
                                        {cert.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        {cert.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="my-7 h-px bg-white/10"></div>

                                    {/* Bottom */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
                                                Completed
                                            </p>

                                            <p className="mt-1 text-sm text-slate-400">
                                                {cert.date}
                                            </p>
                                        </div>

                                        {cert.verification ? (
                                            <a
                                                href={cert.verification}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-slate-300 hover:bg-white/[0.08] hover:text-white transition"
                                            >
                                                Verify Certificate
                                                <span>↗</span>
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-slate-500">
                                                <FaGraduationCap size={14} />
                                                Certificate
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </article>
                        )
                    })}

                </div>

                {/* Bottom note */}
                <div className="mt-5 rounded-[2rem] border border-white/10 bg-gradient-to-r from-emerald-500/[0.06] to-blue-500/[0.06] p-7 sm:p-9">

                    <p className="text-slate-400 leading-7">
                        Continuously learning through professional courses,
                        practical job simulations, research and hands-on
                        development projects.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default Certifications