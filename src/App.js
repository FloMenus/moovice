import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
  import NotFound from "./pages/NotFound";
  import Home from "./pages/Home";
  import Weekly from "./pages/Weekly";
  import Popular from "./pages/Popular";
  import Favorites from "./pages/Favorites";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
