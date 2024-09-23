import { Navigate, Route, Routes } from "react-router-dom";

import { GetClient } from "../pages/get-client";

export default function RouterClient() {
    return (
        <Routes>
            <Route path="/show-all" element={<GetClient />} />
            <Route path='*' element={<Navigate to="/client/show-all" />} />
        </Routes>
    )
}