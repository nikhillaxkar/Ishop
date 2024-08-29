import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebsiteMain from "./Pages/Website/Main";
import Home from "./Pages/Website/Home";
import Store from "./Pages/Website/Store";
import Cart from "./Pages/Website/Cart";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminMain from "./Pages/Admin/Main";
import CategorytAdd from "./Pages/Admin/Category/Add";
import CategorytView from "./Pages/Admin/Category/View";
import CategorytEdit from "./Pages/Admin/Category/Edit";
import ColorView from "./Pages/Admin/Color/View";
import ColorAdd from "./Pages/Admin/Color/Add";

import ProductAdd from "./Pages/Admin/Category/Add";
import ProductView from "./Pages/Admin/Category/View";
import NotFound from "./Pages/Admin/product/NotFound";
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <WebsiteMain />, // Added a comma here
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "store",
          element: <Store />
        },
        {
          path: "cart",
          element: <Cart />
        }
      ]
    },
    {
      path: '/admin',
      element: <AdminMain />,
      children: [
        {
          path: "",
          element: <Dashboard />
        },
        {
          path: "category",
          children: [
            {
              path: "add",
              element: <CategorytAdd />
            },
            {
              path: "view",
              element: <CategorytView />
            },
            {
              path: "edit/:c_id",
              element: <CategorytEdit />
            }
          ]

        },
        {
          path: "product",
          children: [
            {
              path: "add",
              element: <ProductAdd />
            },
            {
              path: "view",
              element: <ProductView />
            }
          ]

        },

        {
          path: "color",
          children: [
            {
              path: "add",
              element: <ColorAdd />
            },
            {
              path: "view",
              element: <ColorView />
            }
          ]

        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
