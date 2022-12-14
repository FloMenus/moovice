import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import Movie from "./pages/Movie";

import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <BrowserRouter>
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
    </BrowserRouter>
  );
}
