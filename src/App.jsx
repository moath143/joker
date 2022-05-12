import Home from "./screen/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./screen/movie";

function App() {
  return (
    <div>
      <BrowserRouter>     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
