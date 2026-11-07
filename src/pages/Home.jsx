import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function useScrollReveal() {
    useEffect(() => {
        if (!('IntersectionObserver' in window)) return

        document.documentElement.classList.add('js-reveal')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
        )

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}

function Home() {
    useScrollReveal()

    return (
        <>
            <a
                href="#about"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-black"
            >
                Skip to content
            </a>

            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default Home
