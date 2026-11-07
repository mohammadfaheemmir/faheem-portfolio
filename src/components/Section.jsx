function Section({ id, children, className = '' }) {
    return (
        <section
            id={id}
            className={`relative px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32 ${className}`}
        >
            <div className="max-w-7xl mx-auto">{children}</div>
        </section>
    )
}

export default Section
