import { Route, Routes } from "react-router-dom";

// import CanvasTools from "./components/CanvasTools"; 
import ROUTES from "./constant/routesConstant";
import CaseBlog from "./pages/CaseBlog";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewCase from "./pages/NewCase";
import { ProSidebarProvider } from "react-pro-sidebar";
import LoadCase from "./pages/LoadCase";
import Page404 from "./pages/Page404"

const App = () => {
  return (
    <div className="app">
      <ProSidebarProvider>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.forgotPassword} element={<ForgetPassword />} />
          <Route path={ROUTES.newCase} element={<NewCase />} />
          <Route path={ROUTES.caseBlog} element={<CaseBlog />} />
          {/* <Route path={ROUTES.canvasTool} element={<CanvasTools />} /> */}
          <Route path={ROUTES.loadCase} element={<LoadCase />} />
          <Route path={ROUTES.page404} element={<Page404/>}/>
        </Routes>
      </ProSidebarProvider>
    </div>
  );
};

export default App;
