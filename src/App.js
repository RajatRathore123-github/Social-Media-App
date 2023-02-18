import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import * as ROUTES from "./constants/routes"

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));

function App() {
  return (
   <Router>
    <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
      <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
    </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
