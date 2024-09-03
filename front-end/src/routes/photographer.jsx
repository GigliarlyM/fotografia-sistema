import { Navigate, Route, Routes } from "react-router-dom";
import PerfilPhotographer from "../pages/perfil-photographer";
import AlterDataPhotographer from "../pages/alter-photographer";

export default function RouterPhotographer() {
    return (
        <Routes>
            <Route path="/" element={<PerfilPhotographer />} />
            <Route path='alter' element={<AlterDataPhotographer />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}