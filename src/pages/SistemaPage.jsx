import CriacaoPersonagem from "../components/sistema/CriacaoPersonagem";

export default function SistemaPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="font-cinzel text-4xl font-bold text-amber-300/90 mb-8 border-b border-slate-700 pb-4">
                Sistema - Limiar Sombrio
            </h1>
            <CriacaoPersonagem />
        </div>
    );
}