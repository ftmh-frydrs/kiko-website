import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as paths from "../configs/route-paths";

import Home from "../Pages/Home";


function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route path={paths.home} element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
