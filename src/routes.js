import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="sobre-mim" element={<SobreMim />} />
                </Route>
        
                <Route path="posts/:id" element={<Post />} />
                <Route path="*" element={<NaoEncontrada />} />
            </Routes>

            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;
