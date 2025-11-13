import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <header>
                <h1>Limiar Sombrio</h1>
            </header>
            <Outlet />
            <footer>
                <p>Footer</p>
            </footer>
        </>
    );
}
