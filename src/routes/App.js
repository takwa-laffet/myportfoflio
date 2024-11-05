import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myportfoflio" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
