import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import * as ROUTES from "./constants/routes"

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
   <Router>
    <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
    </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
