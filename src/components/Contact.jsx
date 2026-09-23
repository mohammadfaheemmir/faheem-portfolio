import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
} from 'react-icons/fa'

function Contact() {
    return (
        <section
            id="contact"
            className="relative px-5 sm:px-8 lg:px-12 py-28 lg:py-40"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section label */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="h-px w-10 bg-blue-400"></span>

                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Contact
                    </p>
                </div>

                {/* Heading */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    <div className="lg:col-span-8">
                        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.06em] leading-[0.9]">
                            Let's build
                            <span className="gradient-text block">
                                something great.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:col-span-4 lg:pt-3">
                        <p className="text-lg leading-8 text-slate-400">
                            Have an opportunity, project, or idea you'd like
                            to discuss? I'd be happy to connect.
                        </p>
                    </div>

                </div>

                {/* Contact cards */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">

                    {/* Email card */}
                    <a
                        href="mailto:faheemmir129@gmail.com"
                        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9 hover:border-blue-400/30 hover:bg-white/[0.05] transition-all duration-300"
                    >

                        {/* Glow */}
                        <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-blue-500/[0.06] blur-3xl pointer-events-none"></div>

                        <div className="relative">

                            <div className="w-14 h-14 rounded-2xl border border-blue-400/20 bg-blue-400/[0.06] flex items-center justify-center">
                                <FaEnvelope
                                    size={22}
                                    className="text-blue-400"
                                />
                            </div>

                            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-slate-600">
                                Email
                            </p>

                            <p className="mt-3 text-xl sm:text-2xl font-medium text-slate-200 break-all">
                                faheemmir129@gmail.com
                            </p>

                            <p className="mt-6 text-sm text-slate-500 group-hover:text-blue-400 transition">
                                Send me an email ↗
                            </p>

                        </div>

                    </a>

                    {/* Social card */}
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">

                        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                            Find me online
                        </p>

                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">

                            {/* GitHub */}
                            <a
                                href="https://github.com/mohammadfaheemmir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/[0.06] hover:border-white/20 transition"
                            >

                                <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center">
                                    <FaGithub
                                        size={20}
                                        className="text-white"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-slate-200">
                                        GitHub
                                    </p>

                                    <p className="text-xs text-slate-600 mt-1">
                                        View my code
                                    </p>
                                </div>

                                <span className="ml-auto text-slate-600 group-hover:text-white transition">
                                    ↗
                                </span>

                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/mohammad-faheem-mir-b007802a7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/[0.06] hover:border-white/20 transition"
                            >

                                <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center">
                                    <FaLinkedinIn
                                        size={20}
                                        className="text-[#0A66C2]"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-slate-200">
                                        LinkedIn
                                    </p>

                                    <p className="text-xs text-slate-600 mt-1">
                                        Connect with me
                                    </p>
                                </div>

                                <span className="ml-auto text-slate-600 group-hover:text-white transition">
                                    ↗
                                </span>

                            </a>

                        </div>

                    </div>

                </div>

                {/* Availability / Get in touch */}
                <div className="mt-5 rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/[0.07] to-violet-500/[0.07] p-7 sm:p-9">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                        {/* Availability */}
                        <div className="flex items-start gap-4">

                            <span className="relative flex h-3 w-3 mt-1.5 shrink-0">

                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>

                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>

                            </span>

                            <div>

                                <p className="text-sm font-medium text-slate-200">
                                    Available for opportunities
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Web Development · Software Development · AI-Assisted Development
                                </p>

                            </div>

                        </div>

                        {/* Get in touch */}
                        <a
                            href="mailto:faheemmir129@gmail.com"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 px-7 py-4 text-sm font-semibold text-black shadow-[0_0_25px_rgba(52,211,153,0.15)] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.3)]"
                        >
                            Get in touch
                            <span className="text-base">↗</span>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact