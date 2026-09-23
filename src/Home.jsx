import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from './components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}

export default Home