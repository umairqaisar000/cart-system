import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
