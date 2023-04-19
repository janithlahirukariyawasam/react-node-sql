import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "./pages/books";
import Add from "./pages/books";
import Update from "./pages/books";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
