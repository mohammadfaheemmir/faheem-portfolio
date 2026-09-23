import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">

            <nav className="max-w-7xl mx-auto">

                {/* =========================
            MAIN NAVBAR
        ========================== */}
                <div className="relative bg-[#0b0b0d]/95 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-5 md:px-7 py-3 flex items-center justify-between shadow-2xl shadow-black/30">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="group text-lg md:text-xl font-bold tracking-tight text-white"
                    >
                        Faheem
                        <span className="text-emerald-400 group-hover:text-blue-400 transition-colors duration-300">
                            .
                        </span>
                    </a>

                    {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm">

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-slate-400 hover:text-white transition-colors duration-200 group"
                            >
                                {link.name}

                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}

                    </div>

                    {/* =========================
              DESKTOP LET'S TALK
          ========================== */}
                    <a
                        href="#contact"
                        className="hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300"
                    >
                        Let's Talk
                        <span className="text-xs">↗</span>
                    </a>

                    {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={
                            menuOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                        aria-expanded={menuOpen}
                        className="lg:hidden relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300"
                    >

                        {/* Top line */}
                        <span
                            className={`absolute left-3.5 top-[15px] w-4 h-[1.5px] bg-slate-300 transition-all duration-300 ${menuOpen
                                    ? 'rotate-45 translate-y-[5px]'
                                    : ''
                                }`}
                        />

                        {/* Middle line */}
                        <span
                            className={`absolute left-3.5 top-[21px] w-4 h-[1.5px] bg-slate-300 transition-all duration-300 ${menuOpen
                                    ? 'opacity-0'
                                    : 'opacity-100'
                                }`}
                        />

                        {/* Bottom line */}
                        <span
                            className={`absolute left-3.5 top-[27px] w-4 h-[1.5px] bg-slate-300 transition-all duration-300 ${menuOpen
                                    ? '-rotate-45 -translate-y-[1px]'
                                    : ''
                                }`}
                        />

                    </button>

                </div>

                {/* =========================
            MOBILE BACKDROP
        ========================== */}
                <div
                    onClick={closeMenu}
                    className={`fixed inset-0 top-[88px] bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${menuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }`}
                />

                {/* =========================
            MOBILE MENU
        ========================== */}
                <div
                    className={`relative lg:hidden mt-3 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0d]/98 backdrop-blur-2xl shadow-2xl shadow-black/50 transition-all duration-300 ease-out ${menuOpen
                            ? 'max-h-[700px] opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'
                        }`}
                >

                    <div className="p-4 sm:p-5">

                        {/* Menu heading */}
                        <div className="px-3 pt-2 pb-4 flex items-center justify-between">

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                                    Navigation
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    Explore my portfolio
                                </p>
                            </div>

                            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />

                        </div>

                        {/* Mobile links */}
                        <div className="space-y-1">

                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    style={{
                                        transitionDelay: menuOpen
                                            ? `${index * 35}ms`
                                            : '0ms',
                                    }}
                                    className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300 ${menuOpen
                                            ? 'translate-x-0 opacity-100'
                                            : 'translate-x-3 opacity-0'
                                        }`}
                                >

                                    <div className="flex items-center gap-4">

                                        <span className="text-[10px] text-slate-700 group-hover:text-emerald-400 transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <span className="text-[15px] font-medium">
                                            {link.name}
                                        </span>

                                    </div>

                                    <span className="text-slate-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200">
                                        ↗
                                    </span>

                                </a>
                            ))}

                        </div>

                        {/* =========================
                MOBILE LET'S TALK
            ========================== */}
                        <div
                            className={`mt-4 pt-4 border-t border-white/10 transition-all duration-300 ${menuOpen
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-2'
                                }`}
                        >

                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 w-full rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 py-3.5 text-sm font-medium hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300"
                            >
                                Let's Talk
                                <span>↗</span>
                            </a>

                        </div>

                    </div>

                </div>

            </nav>

        </header>
    )
}

export default Navbar