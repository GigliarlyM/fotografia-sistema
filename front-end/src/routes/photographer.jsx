import { Navigate, Route, Routes } from "react-router-dom";

import AlterDataPhotographer from "../pages/alter-photographer";
import PerfilPhotographer from "../pages/perfil-photographer";
import CreatePhoto from "../pages/create-photo";

export default function RouterPhotographer() {
    return (
        <Routes>
            <Route path="/" element={<PerfilPhotographer />} />
            <Route path='alter' element={<AlterDataPhotographer />} />
            <Route path="photo/create" element={<CreatePhoto />} />
            <Route path='*' element={<Navigate to="/photographer" />} />
        </Routes>
    )
}