function Experience() {
    const experiences = [
        {
            period: '2026',
            title: 'Web Developer — Fresher',
            organization: 'Personal & Academic Projects',
            description:
                'A fresher focused on web development with practical experience building responsive and full-stack applications. I have worked with React, Next.js, JavaScript, Node.js, Express.js, MongoDB, Supabase, Tailwind CSS, and modern web technologies.',
        },

        {
            period: '2026',
            title: 'Digital Heroes',
            organization: 'Full-Stack Web Application',
            description:
                'Built a full-stack web application using Next.js, Supabase, and Tailwind CSS. The project includes authentication, user profiles, subscriptions, scores, charity contributions, draws, winners, and an admin workflow. It gave me practical experience with databases, authentication, application workflows, responsive UI development, and full-stack development.',
        },

        {
            period: '2026',
            title: 'MERN Blogging App',
            organization: 'Full-Stack Web Application',
            description:
                'Developed a blogging platform using the MERN stack where users can create accounts, publish posts with images and text, explore different topics, search content, and interact with posts. This project strengthened my skills in React, Node.js, Express.js, MongoDB, APIs, database operations, and responsive web development.',
        },

        {
            period: '2026',
            title: 'ViT-HHO',
            organization: 'AI / Research Project',
            description:
                'Worked on a research project for diabetic retinopathy classification using a Vision Transformer optimized with Harris Hawks Optimization on the APTOS 2019 dataset. The project involved deep learning, image classification, model optimization, hyperparameter tuning, and performance evaluation.',
        },

        {
            period: '2024 — 2026',
            title: 'Master of Computer Applications (MCA)',
            organization: 'Education',
            description:
                'Completed my MCA with a focus on software development, web technologies, databases, computer science fundamentals, artificial intelligence, and network security. During this period, I worked on academic and practical projects to strengthen my development skills.',
        },

        {
            period: '2021 — 2024',
            title: 'Bachelor of Computer Applications (BCA)',
            organization: 'Education',
            description:
                'Completed my BCA and built a strong foundation in programming, web development, databases, data structures, computer networks, software engineering, and computer science fundamentals.',
        },
    ]

    return (
        <section
            id="experience"
            className="px-6 md:px-12 py-32 border-t border-black"
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Section label */}
                    <div className="md:col-span-3">
                        <p className="text-sm uppercase tracking-[0.2em]">
                            Experience
                        </p>

                        <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
                            My journey through education, projects, and practical
                            experience as a web development fresher.
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="md:col-span-9">

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                            My journey so far.
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-slate-500 max-w-2xl">
                            From building full-stack applications to working on
                            AI research, I have focused on turning what I learn
                            into practical projects and continuously improving
                            my development skills.
                        </p>

                        <div className="mt-16">

                            {experiences.map((experience) => (

                                <article
                                    key={`${experience.period}-${experience.title}`}
                                    className="border-t border-black py-10 md:py-14"
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                                        {/* Period */}
                                        <div className="md:col-span-2">

                                            <p className="text-sm uppercase tracking-[0.15em]">
                                                {experience.period}
                                            </p>

                                        </div>

                                        {/* Experience information */}
                                        <div className="md:col-span-10">

                                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                                                {experience.title}
                                            </h3>

                                            <p className="mt-3 text-sm uppercase tracking-[0.15em] text-slate-500">
                                                {experience.organization}
                                            </p>

                                            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-3xl">
                                                {experience.description}
                                            </p>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Experience