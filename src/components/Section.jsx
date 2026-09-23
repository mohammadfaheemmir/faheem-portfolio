import Section from './Section'

function About() {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-3">
                    <p className="text-sm uppercase tracking-[0.2em]">
                        About Me
                    </p>
                </div>

                <div className="md:col-span-9">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl">
                        I build digital experiences that are simple, useful and
                        made to last.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl">
                        <p className="text-lg leading-relaxed">
                            I'm Mohammad Faheem Mir, a web developer and recently
                            completed MCA graduate. I enjoy turning ideas into
                            functional, responsive web applications.
                        </p>

                        <p className="text-lg leading-relaxed">
                            I work with modern web technologies and have a strong
                            interest in frontend development, full-stack
                            applications, databases, and network security.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About