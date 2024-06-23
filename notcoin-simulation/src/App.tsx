import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Home from "../Pages/Home";
import Friends from "../Pages/Friends"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path : "/friends",
    element : <Friends/>
  }
]);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
