import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      {/* Add more routes here if needed */}
    </Routes>
  );
}

export default App;