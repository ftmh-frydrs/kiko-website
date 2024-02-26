import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as paths from "../configs/route-paths";

import Home from "../Pages/Home";
import Accessoires from "../Pages/NavbarPage/Accessoires";
import Angebote from "../Pages/NavbarPage/Angebote";
import Bestsellerc from "../Pages/NavbarPage/Bestsellerc";
import Dienstleistungen from "../Pages/NavbarPage/Dienstleistungen";
import Hautpflege from "../Pages/NavbarPage/Hautpflege";
import MakeUp from "../Pages/NavbarPage/MakeUp";
import Neuigkeiten from "../Pages/NavbarPage/Neuigkeiten";


function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.home} element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
