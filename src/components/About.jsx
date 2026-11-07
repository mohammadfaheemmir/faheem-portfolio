import { FaCode, FaLayerGroup, FaLightbulb } from 'react-icons/fa'
import Section from './Section'
import SectionHeader from './SectionHeader'

const highlights = [
    {
        icon: FaCode,
        title: 'Web Development',
        text: 'Responsive, modern web applications with clean interfaces and genuinely useful functionality.',
    },
    {
        icon: FaLayerGroup,
        title: 'Full-Stack Thinking',
        text: 'Comfortable across front-end, back-end, databases and APIs — and how they fit together.',
    },
    {
        icon: FaLightbulb,
        title: 'Problem Solving',
        text: 'Breaking complex problems into small, testable pieces and finding practical solutions in code.',
    },
]

const stats = [
    { value: 'MCA', label: 'Master of Computer Applications' },
    { value: '500+', label: 'DSA problems solved' },
    { value: '4', label: 'Featured projects' },
    { value: '4', label: 'Certifications' },
]

function About() {
    return (
        <Section id="about">
            <SectionHeader
                label="About"
                title="Turning ideas into"
                highlight="digital experiences."
            />

            <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="reveal lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-slate-400">
                    <p>
                        I'm <span className="text-white font-medium">Mohammad Faheem Mir</span>, a
                        web developer who recently completed a Master of Computer
                        Applications (MCA). I enjoy creating websites and applications
                        that are simple to use, visually engaging and technically reliable.
                    </p>
                    <p>
                        My interests span front-end development, full-stack
                        applications, databases and network security. I keep learning
                        by shipping real projects — and increasingly by working
                        alongside AI coding agents to build faster and better.
                    </p>
                </div>

                <dl className="reveal lg:col-span-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-[#0a1120] p-5 sm:p-6 flex flex-col-reverse">
                            <dt className="mt-1.5 text-sm text-slate-400">{stat.label}</dt>
                            <dd className="text-3xl sm:text-4xl font-semibold tracking-tight">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map(({ icon: Icon, title, text }) => (
                    <div
                        key={title}
                        className="reveal rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 hover:border-white/20 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl border border-blue-400/20 bg-blue-400/[0.07] flex items-center justify-center text-sky-300">
                            <Icon size={16} />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                        <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-400">{text}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default About
