import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App
