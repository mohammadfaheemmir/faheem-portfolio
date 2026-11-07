import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { contact } from '../data/site'

function Hero() {
    const technologies = ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Supabase']

    const socials = [
        { label: 'GitHub', href: contact.github, icon: FaGithub },
        { label: 'LinkedIn', href: contact.linkedin, icon: FaLinkedinIn },
        { label: 'Email', href: `mailto:${contact.email}`, icon: FaEnvelope },
    ]

    return (
        <section
            id="home"
            className="relative min-h-svh overflow-hidden px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-10 flex flex-col"
        >
            {/* Subtle grid that fades out towards the edges */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)',
                }}
            />

            {/* Ambient light (gradients, not blur filters — cheap on mobile) */}
            <div
                className="absolute -top-72 -left-72 w-[800px] h-[800px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 60%)' }}
            />
            <div
                className="absolute top-1/4 right-[-350px] w-[800px] h-[800px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center w-full">

                    {/* ============ Text ============ */}
                    <div className="lg:col-span-7">

                        <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3.5 py-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-sky-200">
                                Open to web development roles
                            </span>
                        </div>

                        <h1 className="mt-7 text-[3.4rem] leading-[0.95] sm:text-7xl lg:text-[5.75rem] xl:text-[6.5rem] font-bold tracking-[-0.045em]">
                            Mohammad
                            <br />
                            <span className="gradient-text">Faheem Mir.</span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl font-medium text-slate-200">
                            Full-Stack Web Developer
                            <span className="text-slate-500"> · MCA Graduate</span>
                        </p>

                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400 max-w-xl">
                            I build responsive web applications with clean
                            interfaces, thoughtful interactions and reliable
                            back-ends — from React front-ends to full-stack
                            products with Node.js and Supabase.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-500 px-6 py-3.5 font-semibold text-white hover:bg-blue-400 transition-colors"
                            >
                                View my work
                                <FaArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 font-medium text-white hover:bg-white/[0.08] transition-colors"
                            >
                                Get in touch
                            </a>

                            <div className="flex items-center gap-2 sm:ml-2 justify-center">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        target={href.startsWith('http') ? '_blank' : undefined}
                                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/25 transition-colors"
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-white/[0.07] max-w-xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                Core stack
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {technologies.map((technology) => (
                                    <li
                                        key={technology}
                                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs sm:text-sm text-slate-300"
                                    >
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ============ Portrait ============ */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[340px] sm:max-w-[420px]">

                            <div
                                className="absolute -inset-16 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 65%)' }}
                            />

                            <div className="relative rounded-[1.75rem] p-px bg-gradient-to-br from-white/25 via-white/5 to-blue-400/30">
                                <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0a1120]">
                                    <img
                                        src="/images/faheem-960.webp"
                                        srcSet="/images/faheem-480.webp 480w, /images/faheem-960.webp 960w"
                                        sizes="(min-width: 640px) 420px, 340px"
                                        width="960"
                                        height="960"
                                        fetchPriority="high"
                                        decoding="async"
                                        alt="Portrait of Mohammad Faheem Mir"
                                        className="w-full aspect-[4/5] object-cover object-top"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-transparent pointer-events-none" />

                                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                                        <div>
                                            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                                Based in
                                            </p>
                                            <p className="mt-1 text-base font-semibold">India</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                                Focus
                                            </p>
                                            <p className="mt-1 text-base font-semibold">Full-stack web</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-3 sm:-right-6 top-8 glass rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
                                <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">Stack</p>
                                <p className="mt-0.5 text-sm font-semibold">MERN + Next.js</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full mt-14 hidden sm:flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <p>Portfolio · {new Date().getFullYear()}</p>
                <a href="#about" className="group hover:text-white transition-colors">
                    Scroll
                    <span className="ml-2 inline-block group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>
            </div>
        </section>
    )
}

export default Hero
