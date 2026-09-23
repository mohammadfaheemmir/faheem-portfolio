function About() {
    const highlights = [
        {
            number: '01',
            title: 'Web Development',
            text: 'Building responsive and modern web applications with a focus on clean interfaces and useful functionality.',
        },
        {
            number: '02',
            title: 'Full-Stack Thinking',
            text: 'Working across frontend, backend, databases and APIs to understand how complete applications work together.',
        },
        {
            number: '03',
            title: 'Problem Solving',
            text: 'I enjoy breaking complex problems into smaller pieces and finding practical solutions through code.',
        },
    ]

    return (
        <section
            id="about"
            className="relative px-5 sm:px-8 lg:px-12 py-28 lg:py-40"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="h-px w-10 bg-blue-400" />

                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        About me
                    </p>
                </div>

                {/* Main intro */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    <div className="lg:col-span-8">
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] leading-[0.95]">
                            Turning ideas into
                            <span className="gradient-text"> digital experiences.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-4 lg:pt-3">
                        <p className="text-lg leading-8 text-slate-400">
                            I'm Mohammad Faheem Mir, a web developer and
                            recently completed Masters in Computer Science. I enjoy creating
                            websites and applications that are simple to use,
                            visually engaging and technically reliable.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-500">
                            My interests include frontend development,
                            full-stack applications, databases and network
                            security. I'm continuously learning and improving
                            through real projects.
                        </p>
                    </div>

                </div>

                {/* Highlights */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">

                    {highlights.map((item) => (
                        <div
                            key={item.number}
                            className="group relative rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">

                                <span className="text-xs text-slate-600">
                                    {item.number}
                                </span>

                                <span className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-blue-400/50 transition">
                                    ↗
                                </span>

                            </div>

                            <h3 className="mt-16 text-2xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-slate-500 leading-7">
                                {item.text}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Bottom stats */}
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                        <p className="text-3xl sm:text-4xl font-bold">
                            BCA -
                            MCA
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            Education
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                        <p className="text-3xl sm:text-4xl font-bold">
                            Solved 500+
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            DSA Problems
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                        <p className="text-3xl sm:text-4xl font-bold">
                            MERN
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            Full-Stack
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                        <p className="text-3xl sm:text-4xl font-bold">
                            Web
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            Development
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About