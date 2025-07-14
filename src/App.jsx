import React from "react";
import { BrowserRouter } from "react-router-dom";
import FornecedorForm from "./pages/Fornecedor/FornecedorForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <FornecedorForm />
    </BrowserRouter>
  );
};

export default App;
