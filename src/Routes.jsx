import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Cart from "pages/Cart";
import Homepage from "pages/Homepage";
import Shop from "pages/Shop";
import ShopDetailDescription from "pages/ShopDetailDescription";
import DetailReview from "pages/DetailReview";
import Checkout from "pages/Checkout";
import Wishlist from "pages/Wishlist";
import Team from "pages/Team";
import Blog from "pages/Blog";
import BlogDetail from "pages/BlogDetail";
import Contactus from "pages/Contactus";
import Aboutus from "pages/Aboutus";
import Layout from "components/Layout/Layout";
import LoginPage from "pages/Login";
import SignupPage from "pages/Signup";


const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "cart", element: <Cart /> },
        { path: "shop", element: <Shop /> },
        { path: "/shopdetaildescription/:id", element: <ShopDetailDescription /> },
        { path: "detailreview", element: <DetailReview /> },
        { path: "checkout", element: <Checkout /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "team", element: <Team /> },
        { path: "blog", element: <Blog /> },
        { path: "blogdetail", element: <BlogDetail /> },
        { path: "contactus", element: <Contactus /> },
        { path: "aboutus", element: <Aboutus /> },
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
        // Add more nested routes as needed
        { path: "*", element: <Outlet /> }, // This ensures that nested routes are rendered inside the Outlet
      ],
    },
  ]);

  return element;
};

export default ProjectRoutes;
