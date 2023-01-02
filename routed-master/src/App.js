
import "./style/App.css";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
//import router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
