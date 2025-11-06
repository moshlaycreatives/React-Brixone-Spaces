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

        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;