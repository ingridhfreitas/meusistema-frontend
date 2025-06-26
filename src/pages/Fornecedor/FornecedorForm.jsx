import React, { useEffect } from "react";
import {
  Container,
  Form,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const FornecedorForm = () => {
  const [fornecedor, setFornecedor] = useState({
    nome: "",
    email: "",
    cnpj: "",
    tipoFornecedor: "COMUM",
    endereco: {
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "Brasil",
    },
  });

  const handleEndereco = (campo, valor) => {
    setFornecedor((prev) => ({
      ...prev,
      endereco: { ...prev, [campo]: valor },
    }));
  };

  const handleCepChange = (e) => {
    handleCepChange("cep", e.target.value);
  };

  useEffect(() => {
    const cep = fornecedor.endereco.cep.replace(/\D/g, "");
    if (cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          handleEndereco("logradouro", response.data.logradouro);
          handleEndereco("bairro", response.data.bairro);
          handleEndereco("cidade", response.data.cidade);
          handleEndereco("estado", response.data.estado);
        })
        .catch((error) =>
          console.error(`Houve um erro ao buscar o endereço no viacep: `, error)
        );
    }
  }, [fornecedor.endereco.cep]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 d-flex align-itens-center">
        {/*Adicionar, depois Editar*/}
        Adicionar fornecedor:
        <OverlayTrigger
          placement="rigth"
          overlay={<Tooltip>Preencha os dados do fornecedor</Tooltip>}
        >
          <span className="ms-2" style={{ cursor: "pointer" }}>
            <FaQuestionCircle></FaQuestionCircle>
          </span>
        </OverlayTrigger>
      </h2>

      <Form>
        {/*Campo Nome*/}
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            required
            value={fornecedor.nome}
            onChange={(e) =>
              setFornecedor({ ...fornecedor, nome: e.target.value })
            }
          />
        </Form.Group>

        {/*Campo E-mail]*/}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            value={fornecedor.email}
            onChange={(e) =>
              setFornecedor({ ...fornecedor, email: e.target.value })
            }
          />
        </Form.Group>

        {/*Campo CNPJ*/}
        <Form.Group className="mb-3">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control
            type="text"
            required
            value={fornecedor.cnpj}
            onChange={(e) =>
              setFornecedor({ ...fornecedor, cnpj: e.target.value })
            }
          />
        </Form.Group>

        {/*Campo select para tipo de fornecedor*/}
        <Form.Group className="mb-3">
          <Form.Label>Tipo Fornecedor</Form.Label>
          <Form.Select
            value={fornecedor.tipoFornecedor}
            onChange={(e) =>
              setFornecedor({ ...fornecedor, tipoFornecedor: e.target.value })
            }
          >
            <option value="COMUM">COMUM</option>
            <option value="PREMIUM">PREMIUM</option>
          </Form.Select>
        </Form.Group>

        {/*Campos de endereço*/}
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex.:58000-000"
                value={fornecedor.endereco.cep}
                onChange={handleCepChange}
                autoComplete="off"
                required
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FornecedorForm;
