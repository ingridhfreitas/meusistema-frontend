import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import FornecedorForm from "./pages/Fornecedor/FornecedorForm";
import Menu from "./components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastrar-fornecedor" element={<FornecedorForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
