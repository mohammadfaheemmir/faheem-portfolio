import { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaRegCopy, FaCheck, FaArrowRight } from 'react-icons/fa'
import Section from './Section'
import { contact } from '../data/site'

const socials = [
    { name: 'GitHub', note: 'See my code', href: contact.github, icon: FaGithub },
    { name: 'LinkedIn', note: 'Connect with me', href: contact.linkedin, icon: FaLinkedinIn },
]

function Contact() {
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(contact.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            window.location.href = `mailto:${contact.email}`
        }
    }

    return (
        <Section id="contact">
            <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(60% 80% at 100% 0%, rgba(56,189,248,0.12) 0%, transparent 60%), radial-gradient(50% 70% at 0% 100%, rgba(59,130,246,0.10) 0%, transparent 60%)',
                    }}
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-end">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="h-px w-8 bg-blue-400" />
                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/80">
                                Contact
                            </p>
                        </div>

                        <h2 className="text-[2.5rem] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.05] text-balance">
                            Let's build <span className="gradient-text">something great.</span>
                        </h2>

                        <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-lg">
                            Have an opportunity, project or idea you'd like to
                            discuss? I'm open to web development roles and
                            would be happy to connect.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href={`mailto:${contact.email}`}
                                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-500 px-6 py-3.5 font-semibold text-white hover:bg-blue-400 transition-colors"
                            >
                                <FaEnvelope size={14} aria-hidden="true" />
                                Email me
                                <FaArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                            </a>

                            <button
                                type="button"
                                onClick={copyEmail}
                                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 font-medium text-slate-200 hover:bg-white/[0.08] transition-colors"
                            >
                                {copied ? (
                                    <FaCheck size={13} className="text-sky-300" aria-hidden="true" />
                                ) : (
                                    <FaRegCopy size={13} aria-hidden="true" />
                                )}
                                <span className="break-all">{copied ? 'Copied!' : contact.email}</span>
                            </button>
                        </div>
                        <p className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</p>
                    </div>

                    <div className="lg:col-span-5 space-y-3">
                        {socials.map(({ name, note, href, icon: Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4 hover:border-white/25 transition-colors"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white">
                                    <Icon size={18} aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block text-sm font-semibold text-slate-100">{name}</span>
                                    <span className="block text-xs text-slate-400">{note}</span>
                                </span>
                                <FaArrowRight
                                    size={12}
                                    className="ml-auto -rotate-45 text-slate-500 group-hover:text-white transition-colors"
                                    aria-hidden="true"
                                />
                            </a>
                        ))}

                        <div className="flex items-center gap-3 rounded-2xl border border-blue-400/15 bg-blue-400/[0.05] p-4">
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </span>
                            <p className="text-sm text-slate-300">
                                Available for web, software &amp; AI-assisted development roles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Contact
