/** @format */

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./components/layout/Base";
import Home from "./pages/Home";
import PageNotFound from "./components/elements/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/*' element={PageNotFound} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}

export default App;
