function ProjectCard({
    number,
    title,
    description,
    technologies,
}) {
    return (
        <article className="group border-t border-black py-8">
            <div className="grid md:grid-cols-6 gap-6">
                <div>
                    <span className="text-sm">{number}</span>
                </div>

                <div className="md:col-span-5">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:opacity-60 transition">
                                {title}
                            </h3>

                            <p className="text-lg leading-relaxed max-w-2xl">
                                {description}
                            </p>
                        </div>

                        <span className="text-2xl group-hover:translate-x-2 transition">
                            ↗
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="border border-black rounded-full px-3 py-1 text-sm"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard