import AdminPage from "./components/AdminPage";
import CommanUser from "./components/CommanUser";
import Layout from "./components/Layout";
import {createBrowserRouter,RouterProvider,Link} from "react-router-dom"
import { Provider } from "react-redux";
import store from "./utils/store";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<Login/>
      },
      {
        path: "admin",
        element: <AdminPage />
      },
      {
        path: "user",
        element: <CommanUser />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
    <div className="">
      <RouterProvider router={router}/>
    </div>
    </Provider>
  );
}



export default App;
