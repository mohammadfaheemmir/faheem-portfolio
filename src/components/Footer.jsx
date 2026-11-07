import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { navLinks, contact } from '../data/site'

const socials = [
    { label: 'GitHub', href: contact.github, icon: FaGithub },
    { label: 'LinkedIn', href: contact.linkedin, icon: FaLinkedinIn },
    { label: 'Email', href: `mailto:${contact.email}`, icon: FaEnvelope },
]

function Footer() {
    return (
        <footer className="px-5 sm:px-8 lg:px-12 pb-8">
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div>
                        <a href="#home" className="text-xl font-bold tracking-tight">
                            Faheem<span className="text-blue-400">.</span>
                        </a>
                        <p className="mt-2 text-sm text-slate-400">
                            Full-stack web developer · Building for the web.
                        </p>
                    </div>

                    <nav aria-label="Footer">
                        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-2">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-colors"
                            >
                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Mohammad Faheem Mir
                    </p>
                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-colors"
                    >
                        <FaArrowUp size={12} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
