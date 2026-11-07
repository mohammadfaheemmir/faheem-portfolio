function SectionHeader({ label, title, highlight, description }) {
    return (
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 lg:items-end">
            <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                    <span className="h-px w-8 bg-blue-400" />
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/80">
                        {label}
                    </p>
                </div>

                <h2 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.08] text-balance">
                    {title}
                    {highlight && (
                        <>
                            {' '}
                            <span className="gradient-text">{highlight}</span>
                        </>
                    )}
                </h2>
            </div>

            {description && (
                <p className="lg:col-span-5 text-base sm:text-lg leading-relaxed text-slate-400 max-w-xl">
                    {description}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
