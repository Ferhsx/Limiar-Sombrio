import React from 'react';
import { Link } from 'react-scroll';

const chapters = [
  { id: 'capitulo-1', title: '1. Introdução - O Véu se Rasga' },
  { id: 'capitulo-2', title: '2. O Básico - Mecânicas Fundamentais' },
  { id: 'capitulo-3', title: '3. Criação de Personagens' },
  { id: 'capitulo-4', title: '4. Atributos e Perícias' },
  { id: 'capitulo-5', title: '5. Condição Mental' },
  { id: 'capitulo-6', title: '6. Outras Condições de Estado' },
  { id: 'capitulo-7', title: '7. Equipamento' },
  { id: 'capitulo-8', title: '8. Exploração e Investigação' },
  { id: 'capitulo-9', title: '9. Confronto' },
  { id: 'capitulo-10', title: '10. As Sombras' },
  { id: 'capitulo-11', title: '11. Rituais e o Além' },
  { id: 'capitulo-12', title: '12. Recuperação e Downtime' },
  { id: 'capitulo-13', title: '13. Progressão (XP)' },
  { id: 'capitulo-14', title: '14. O Mestre Liminar' }
];

export default function TableOfContents() {
  return (
    <div className="sticky top-4 mb-8 p-4 bg-slate-800/80 rounded-lg border border-slate-700">
      <h2 className="text-xl font-bold text-amber-300 mb-4">Sumário</h2>
      <nav>
        <ul className="space-y-2">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link
                to={chapter.id}
                smooth={true}
                duration={500}
                className="text-slate-300 hover:text-amber-300 cursor-pointer transition-colors flex items-start"
                activeClass="text-amber-300 font-medium"
                spy={true}
                offset={-20}
              >
                <span className="mr-2">•</span>
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}