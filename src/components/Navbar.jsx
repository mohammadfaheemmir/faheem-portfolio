import { useEffect, useState } from 'react'
import { navLinks } from '../data/site'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    // Highlight the section currently in the middle of the screen
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-45% 0px -50% 0px' },
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Escape closes the menu; lock page scroll while it is open
    useEffect(() => {
        if (!menuOpen) return

        const onKey = (event) => {
            if (event.key === 'Escape') setMenuOpen(false)
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', onKey)

        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener('keydown', onKey)
        }
    }, [menuOpen])

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
            <nav className="max-w-7xl mx-auto" aria-label="Main">

                <div
                    className={`relative border rounded-full pl-5 pr-2 sm:pl-6 py-2 flex items-center justify-between transition-all duration-300 ${scrolled || menuOpen
                        ? 'bg-[#0b1222]/95 border-white/10 shadow-xl shadow-black/40'
                        : 'bg-[#0b1222]/70 border-white/[0.06]'
                        }`}
                >

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="text-lg font-bold tracking-tight text-white"
                        aria-label="Faheem — back to top"
                    >
                        Faheem<span className="text-blue-400">.</span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden lg:flex items-center gap-1 text-sm">
                        {navLinks.map((link) => {
                            const isActive = active === link.href.slice(1)

                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        aria-current={isActive ? 'true' : undefined}
                                        className={`rounded-full px-3.5 py-2 transition-colors duration-200 ${isActive
                                            ? 'text-white bg-white/[0.07]'
                                            : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    {/* Desktop CTA */}
                    <a
                        href="#contact"
                        className="hidden lg:inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors"
                    >
                        Let's talk
                    </a>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className="lg:hidden relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                    >
                        <span
                            className={`absolute left-3.5 top-[15px] w-4 h-[1.5px] bg-slate-200 transition-all duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`}
                        />
                        <span
                            className={`absolute left-3.5 top-[21px] w-4 h-[1.5px] bg-slate-200 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <span
                            className={`absolute left-3.5 top-[27px] w-4 h-[1.5px] bg-slate-200 transition-all duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}
                        />
                    </button>
                </div>

                {/* Mobile backdrop */}
                <div
                    onClick={closeMenu}
                    aria-hidden="true"
                    className={`fixed inset-0 -z-10 bg-black/70 transition-opacity duration-300 lg:hidden ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                />

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    className={`lg:hidden mt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1222] shadow-2xl shadow-black/50 transition-all duration-300 ease-out ${menuOpen
                        ? 'max-h-[620px] opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none border-transparent'
                        }`}
                >
                    <ul className="p-3">
                        {navLinks.map((link) => {
                            const isActive = active === link.href.slice(1)

                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={closeMenu}
                                        tabIndex={menuOpen ? 0 : -1}
                                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-colors ${isActive
                                            ? 'bg-white/[0.06] text-white'
                                            : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                        )}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="px-3 pb-3">
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            tabIndex={menuOpen ? 0 : -1}
                            className="flex items-center justify-center w-full rounded-full bg-blue-500 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors"
                        >
                            Let's talk
                        </a>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar
