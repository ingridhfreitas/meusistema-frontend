# 📄 FornecedorForm

This React component (`FornecedorForm`) is a form for adding suppliers. It uses `React Bootstrap` for layout and `axios` to automatically fetch address data based on the entered ZIP code, using the [ViaCEP API](https://viacep.com.br/).

---

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## ✨ Features

- Form with the following fields:

  - Name
  - Email
  - CNPJ
  - Supplier Type (COMUM or PREMIUM)
  - Address (ZIP code, street, number, complement, neighborhood, city, state, country)

- Auto-fetch address data when ZIP code is entered
- Tooltip with user instructions

---

## 📁 Structure

```jsx
📦pages/
 ┗ 📂Fornecedor/
    ┣ 📄FornecedorForm.jsx
    ┗ 📄FornecedorList.jsx (assumed other part of the app)
```

---

## ▶️ How to Use

1. Make sure the dependencies are installed:

```bash
npm install react-bootstrap bootstrap axios react-icons
```

2. Import Bootstrap CSS in `main.jsx` or `index.jsx`:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

3. Import and use the component:

```jsx
import FornecedorForm from "./pages/Fornecedor/FornecedorForm";

function App() {
  return (
    <div className="App">
      <FornecedorForm />
    </div>
  );
}

export default App;
```

---

## ⚠️ Possible Improvements

- CNPJ validation
- Visual feedback for ZIP code fetch errors
- Backend integration to save form data

---

## 🧪 Test ZIP Code

Use a valid ZIP code like `01001-000` to test auto-complete functionality.
