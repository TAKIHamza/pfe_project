
import  { createBrowserRouter,
RouterProvider,

} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Backoffice from './pages/backoffice';
import PageNotFound from './pages/error404';

import About from './pages/about';
import Signup from './pages/signup';
import ProductDetailPage from './pages/ProductDetailPage';
function App() {


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "backoffice",
    element: <Backoffice/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "products/:id",
    element: <ProductDetailPage/>,
  },
  {
    path: "*",
    element: <PageNotFound/>,
  },
]);
  return (
    <div className='' >

	<RouterProvider router={router} />
  
</div>
    
    
  );
}

export default App;
