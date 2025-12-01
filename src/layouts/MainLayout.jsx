import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MainLayout() {
    const { id } = useParams();
    return (
        <>
            <header className="bg-slate-800 p-4 rounded-lg mb-6 flex justify-around">
                <h1 className="text-2xl font-bold mb-2">Limiar Sombrio</h1>
                <nav>
                    <Link className="mr-4" to="/">Home</Link>
                    <Link className="mr-4" to="/ficha">Ficha</Link>
                    <Link className="mr-4" to="/campaign">Campanha</Link>
                    <Link className="mr-4" to="/grimorio">Grimório</Link>
                </nav>
            </header>
            <Outlet />
            <footer>
                <p>Footer</p>
            </footer>
        </>
    );
}
