import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* Add more routes here if needed */}
    </Routes>
  );
}

export default App;