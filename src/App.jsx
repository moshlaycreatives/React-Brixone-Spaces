import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Component/LandingPage/LandingPage";
import AboutUs from "./Component/AboutUs/AboutUs";
import Buy from "./Component/Buy/Buy";
import Rent from "./Component/Rent/Rent";
import Sell from "./Component/Sell/Sell";
import Invest from "./Component/Invest/Invest";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import SignUp from "./Component/Login/SignUp";
import ForgotPassword from "./Component/Login/ForgotPassword";
import EmailOtp from "./Component/Login/EmailOtp";
import NewPassword from "./Component/Login/NewPassword";
import PropertyDetail from "./Component/Rent/PropertyDetail";
import Blog from "./Component/Blog/Blog";
import BlogDetail from "./Component/Blog/BlogDetail";



const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Rent" element={<Rent />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Invest" element={<Invest />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/PropertyDetail" element={<PropertyDetail />} />
          <Route path="/BlogDetail" element={<BlogDetail />} />

        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/EmailOtp" element={<EmailOtp />} />
        <Route path="/NewPassword" element={<NewPassword />} />
      </Routes>
    </>
  );
}

export default App;