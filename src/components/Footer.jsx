import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaArrowUp,
} from 'react-icons/fa'

function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="relative px-5 sm:px-8 lg:px-12 pt-20 pb-8">

            <div className="max-w-7xl mx-auto">

                {/* Top border */}
                <div className="h-px bg-white/10"></div>

                {/* Main footer */}
                <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>

                        <a
                            href="#home"
                            className="inline-block text-2xl font-bold tracking-tight"
                        >
                            <span className="text-white">Faheem</span>
                            <span className="gradient-text">.</span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                            Web developer focused on building modern web
                            applications, exploring AI-assisted development,
                            and continuously improving my technical skills.
                        </p>

                    </div>

                    {/* Navigation */}
                    <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
                            Navigation
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">

                            <a
                                href="#home"
                                className="text-sm text-slate-400 hover:text-white transition"
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                className="text-sm text-slate-400 hover:text-white transition"
                            >
                                About
                            </a>

                            <a
                                href="#skills"
                                className="text-sm text-slate-400 hover:text-white transition"
                            >
                                Skills
                            </a>

                            <a
                                href="#experience"
                                className="text-sm text-slate-400 hover:text-white transition"
                            >
                                Experience
                            </a>

                            <a
                                href="#projects"
                                className="text-sm text-slate-400 hover:text-white transition"
                            >
                                Projects
                            </a>

                            <a
                                href="#certifications"
                                className="text-sm text-slate-400 hover:text-white transition"
                            >
                                Certifications
                            </a>

                            <a
                                href="#contact"
                                className="text-sm text-slate-400 hover:text-white transition"
                            >
                                Contact
                            </a>

                        </div>

                    </div>

                    {/* Connect */}
                    <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
                            Connect
                        </p>

                        <div className="mt-5 flex items-center gap-3">

                            {/* GitHub */}
                            <a
                                href="https://github.com/mohammadfaheemmir"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition"
                            >
                                <FaGithub size={18} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/mohammad-faheem-mir-b007802a7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:bg-white/[0.08] hover:border-white/20 transition"
                            >
                                <FaLinkedinIn size={17} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:faheemmir129@gmail.com"
                                aria-label="Email"
                                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/[0.08] hover:border-white/20 transition"
                            >
                                <FaEnvelope size={17} />
                            </a>

                        </div>

                        <a
                            href="mailto:faheemmir129@gmail.com"
                            className="inline-block mt-5 text-sm text-slate-400 hover:text-white transition"
                        >
                            faheemmir129@gmail.com
                        </a>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                    <p className="text-xs text-slate-600">
                        © {currentYear} Mohammad Faheem Mir. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <p className="text-xs text-slate-600">
                            
                        </p>

                        {/* Back to top */}
                        <button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition"
                        >
                            <FaArrowUp size={13} />
                        </button>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer