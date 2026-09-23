function Hero() {
    const technologies = ['React', 'Next.js', 'Node.js', 'Supabase']

    return (
        <section className="relative min-h-screen overflow-hidden px-5 sm:px-8 lg:px-12 pt-28 pb-12">

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '70px 70px',
                }}
            />

            {/* Ambient lights */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />

            <div className="absolute top-1/3 right-[-200px] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto min-h-[calc(100vh-140px)] flex items-center relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

                    {/* ================= LEFT ================= */}

                    <div className="lg:col-span-7">

                        {/* Availability */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.035] mb-8">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </span>

                            <span className="text-xs sm:text-sm text-slate-300">
                                Open to web development opportunities
                            </span>
                        </div>

                        {/* Small intro */}
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-5">
                            Hello, I'm
                        </p>

                        {/* Main heading */}
                        <h1 className="text-[15vw] sm:text-[11vw] lg:text-[7.5rem] xl:text-[8.5rem] font-bold tracking-[-0.075em] leading-[0.8]">
                            Mohammad
                            <br />
                            <span className="gradient-text">
                                Faheem.
                            </span>
                        </h1>

                        {/* Role */}
                        <div className="mt-10 flex items-center gap-4">
                            <span className="h-px w-12 bg-blue-400" />

                            <p className="text-lg sm:text-xl text-slate-300">
                                Web Developer
                            </p>
                        </div>

                        {/* Description */}
                        <p className="mt-6 text-base sm:text-lg leading-8 text-slate-400 max-w-2xl">
                            I create responsive web applications with clean
                            interfaces, thoughtful interactions, and reliable
                            functionality — from frontend experiences to
                            full-stack applications.
                        </p>

                        {/* Buttons */}
                        {/* Buttons */}
                        <div className="mt-9 flex flex-wrap gap-4">

                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-3 bg-emerald-400 text-black px-7 py-4 rounded-full font-semibold hover:bg-emerald-300 transition"
                            >
                                Explore my work

                                <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    ↗
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.09] transition"
                            >
                                Let's talk
                            </a>

                        </div>

                        {/* Technologies */}
                        <div className="mt-12 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.025] text-xs sm:text-sm text-slate-400"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}

                    <div className="lg:col-span-5 flex justify-center lg:justify-end">

                        <div className="relative w-full max-w-[480px]">

                            {/* Outer glow */}
                            <div className="absolute -inset-8 bg-blue-500/10 blur-[90px] rounded-full" />

                            {/* Decorative circle */}
                            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full border border-blue-400/20" />

                            <div className="absolute -right-3 -top-3 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,0.9)]" />

                            {/* Image card */}
                            <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-white/25 via-white/5 to-blue-500/30">

                                <div className="relative overflow-hidden rounded-[2rem] bg-[#0a0a0a]">

                                    <img
                                        src="/images/faheem.png"
                                        alt="Mohammad Faheem Mir"
                                        className="w-full aspect-[4/5] object-cover object-top"
                                    />

                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />

                                    {/* Image bottom information */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">

                                        <div className="flex items-end justify-between">

                                            <div>
                                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                                    Based in
                                                </p>

                                                <p className="mt-1 text-lg font-medium">
                                                    India
                                                </p>
                                            </div>

                                            <div className="h-11 w-11 rounded-full bg-white text-black flex items-center justify-center">
                                                ↗
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Floating card */}
                            <div className="absolute -left-5 bottom-8 sm:-left-8 glass rounded-2xl px-5 py-4 shadow-2xl">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                    Currently
                                </p>

                                <p className="mt-1 text-sm font-medium">
                                    Building for the web
                                </p>

                            </div>

                            {/* Floating experience card */}
                            <div className="absolute -right-4 top-20 glass rounded-2xl px-4 py-3 hidden sm:block">

                                <p className="text-xs text-slate-400">
                                    Stack
                                </p>

                                <p className="mt-1 text-sm font-medium">
                                    MERN
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom navigation hint */}
            <div className="max-w-7xl mx-auto relative z-10 mt-10 pt-5 border-t border-white/10 flex items-center justify-between">

                <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
                    Portfolio · 2026
                </p>

                <a
                    href="#about"
                    className="group text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-white transition"
                >
                    Scroll down
                    <span className="ml-2 group-hover:translate-y-1 inline-block transition-transform">
                        ↓
                    </span>
                </a>

            </div>

        </section>
    )
}

export default Hero