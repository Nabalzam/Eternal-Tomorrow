import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayouts";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Me from "./pages/Me";
import Url from "./pages/Url";
import Mail from "./pages/Mail";
import Verified from "./pages/Verified";
import PublicMessage from "./pages/PublicMesssage";
import Version from "./pages/Version";
import MailId from "./pages/MailId";
import AdminVersionInsert from "./pages/AdminVersionInsert";
import Admin from "./pages/Admin";
import AdminLayout from "./layouts/AdminLayouts";
import Pena from "./pages/Pena";
function App() {
  const withLayout = (LayoutComponent: any, ChildComponent: any) => {
    return (props: any) => (
      <LayoutComponent>
        <ChildComponent {...props}></ChildComponent>
      </LayoutComponent>
    );
  };

  const AdminWithLayout = withLayout(AdminLayout, Admin)
  const HomeWithLayout = withLayout(HomeLayout, Home);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeWithLayout />}>
          <Route index element={<Home />} />
          <Route path="public" element={<PublicMessage />} />

          <Route path="version" element={<Version />} />
        </Route>
        <Route path="verify" element={<Verified />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="message" element={<HomeWithLayout />}>
          <Route path=":urlId" element={<Url />} />
        </Route>

        <Route path="admin" element={<AdminWithLayout />}>
          <Route index element={<Admin />} />
          <Route path="vin" element={<AdminVersionInsert />} />
        </Route>

        <Route path="me" element={<HomeWithLayout />}>
          <Route index element={<Me />} />
          <Route path="mail">
            <Route index element={<Mail />} />
            <Route path=":mailId" element={<MailId />} />
          </Route>
        </Route>

        <Route path="/pena" element={<Pena/>}></Route>

        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
