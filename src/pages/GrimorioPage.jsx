import Section from "../components/ui/Section";
import { grimorioData } from "../data/grimorioContent";

export default function GrimorioPage() {
    return (
        <div className="p-4 md:p-8">
            <h1 className="text-4xl font-cinzel text-amber-300 text-center mb-8">
                Grimório de Limiar Sombrio
            </h1>
            {/*Adiciona uma div para que o texto fique em negrito e vermelho e com um box bonito e elegante */}
            <p className="text-lg text-center mb-8 font-bold text-red-400 bg-slate-900/50 p-4 rounded-md border border-slate-700">
                Atenção, essa parte é somente para curiosidades do sistema incial, não é necessário ler ou entender para jogar, o site que está em desenvolvimente é justamente para você não ter quer ler tudo isso.
            </p>

            {grimorioData.map((capitulo) => (
                <Section key={capitulo.id} title={capitulo.title}>
                    <div dangerouslySetInnerHTML={{ __html: capitulo.content }} />
                </Section>
            ))}
        </div>
    );
}