import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ProductPage from "./pages/ProductPage";
import "./pages/pages.css";
import "./components/components.css";
import { Main } from "./pages/Home";
import Layout from "./layout/Layout";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}
