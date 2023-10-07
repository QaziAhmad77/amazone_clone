import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import { productsData } from './api/api';
import Signin from './pages/Signin';

// const Rootlayout=()=>{
//   return (
//       <div className="font-bodyFont">
//       <Header />

//       <Outlet/>
//       <Footer />
//     </div>
//   )
// }

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
