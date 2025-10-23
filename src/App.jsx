// App.jsx
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about";
import Footer from './components/footer.tsx';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* more routes here */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
