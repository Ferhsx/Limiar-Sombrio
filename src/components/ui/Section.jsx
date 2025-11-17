export default function Section({ title, children }) {
    return (
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 mb-6">
            <h2 className="font-cinzel text-2xl font-bold text-amber-300/90 border-b border-slate-700 pb-3 mb-4">
                {title}
            </h2>
            <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed">
                {children}
            </div>
        </section>
    );
}