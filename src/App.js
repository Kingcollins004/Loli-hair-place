import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wigs from "./Pages/Wigs";
import Bags from "./Pages/Bags";
import Shoes from "./Pages/Shoes";
import { useState } from "react";
import Loading from "./Pages/Loading";
import Catalogue from "./Pages/Catalogue";
import NewArrival from "./Pages/NewArrival";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Loading from "./Pages/Loading";
// import ProductPage from "./Pages/Gowns/ProductPage";
// import ProductPagebag from "./Pages/Bags/ProductPagebag";
// import ProductPagepolo from "./Pages/Polo/ProductPagepolo";
// import ProductPage2pcs from "./Pages/Tpcs/ProductPage2pcs";
// import SharedLayout from "./Pages/SharedLayout";

const App = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        {/* <Route index element={<Home />} /> */}
        <Route path="Wigs" element={<Wigs />}></Route>
        <Route path="Bags" element={<Bags />}></Route>
        <Route path="Shoes" element={<Shoes />}></Route>
        <Route path="Catalogue" element={<Catalogue />}></Route>
        <Route path="NewArrival" element={<NewArrival />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="Signup" element={<Signup />}></Route>
        {/* <Route path="Bags/:itemId" element={<ProductPagebag />}></Route>
        <Route path="Polo/:itemId" element={<ProductPagepolo />}></Route>
        <Route path="Gowns/:itemId" element={<ProductPage />}></Route>
        <Route path="Tpcs/:itemId" element={<ProductPage2pcs />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
