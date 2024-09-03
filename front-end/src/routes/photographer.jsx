import { Navigate, Route, Routes } from "react-router-dom";

import AlterDataPhotographer from "../pages/alter-photographer";
import CreatePhoto from "../pages/create-photo";
import { GetPhoto } from "../pages/get-photo";
import PerfilPhotographer from "../pages/perfil-photographer";
import LogIn from "../pages/login-photographer";

export default function RouterPhotographer() {
    return (
        <Routes>
            <Route path="/" element={<PerfilPhotographer />} />
            <Route path='alter' element={<AlterDataPhotographer />} />
            <Route path="photo/create" element={<CreatePhoto />} />
            <Route path="photo" element={<GetPhoto />} />
            <Route path="login" element={<LogIn />} />
            <Route path='*' element={<Navigate to="/photographer/login" />} />
        </Routes>
    )
}