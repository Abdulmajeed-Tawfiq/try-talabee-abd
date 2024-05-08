import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import LoadingPage from './Pages/Loading/LoadingPage';
import Virefied from './Pages/Auth/Virefied';
import SuccessVerify from './Pages/Auth/SuccessVerify';
import BecomePartner from './Pages/Become Partner/BecomePartner';
import LoadingAntd from './Components/Utils/Loading/LoadingAntd';
// import Profile from './Pages/profile/Profile';


const CheckPaymentPage  =  lazy(()=>import('./Pages/paymentRedirect/Page'));
const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))
const SuccessPayment = lazy(() => import("./Pages/SuccessPayment/Page"))
const OrdersPage = lazy(() => import("./Pages/Orders/OrdersPage"))
const Contact = lazy(() => import("./Pages/Contact/Contact"))
const About = lazy(() => import("./Pages/Info/About"))
const Privacy = lazy(() => import("./Pages/Info/Privacy"))
const Products = lazy(() => import("./Pages/Product/Products"))
const Product = lazy(() => import("./Pages/Product/Product"))
const Home  = lazy(() => import("./Pages/Home/Page"))
const CartPage = lazy(() => import("./Pages/Cart/CartPage"))
const Auth = lazy(() => import("./Pages/Auth/Page"))
const Profile = lazy(() => import("./Pages/profile/Profile"))
const SingleOrderPage = lazy(() => import("./Pages/SingleOrder/SingleOrderPage"))
const FavouritePage = lazy(() => import("./Pages/Favourite/FavouritePage"))


const App = () => {


  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<LoadingAntd />}> <Page404 /></Suspense>} />

      <Route path="/cart" element={<Suspense fallback={<LoadingAntd />}> <CartPage /></Suspense>} />
      <Route path="/product/:id" element={<Suspense fallback={<LoadingAntd />}> <Product /></Suspense>} />
      <Route path="/products" element={<Suspense fallback={<LoadingAntd />}> <Products /></Suspense>} />
      <Route path="/single_order" element={<Suspense fallback={<LoadingAntd />}> <SingleOrderPage /></Suspense>} />
      <Route path="/orders" element={<Suspense fallback={<LoadingAntd />}> <OrdersPage /></Suspense>} />
      <Route path="/checkout_payment_online" element={<Suspense fallback={<LoadingAntd />}> <CheckPaymentPage /></Suspense>} />
      <Route path="/privacy" element={<Suspense fallback={<LoadingAntd />}> <Privacy /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<LoadingAntd />}> <About /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<LoadingAntd />}> <Auth /></Suspense>} />
      <Route path="/profile" element={<Suspense fallback={<LoadingAntd />}> <Profile /></Suspense>} />
      <Route path="/verfied" element={<Suspense fallback={<LoadingAntd />}> <Virefied /></Suspense>} />
      <Route path="/success_verify" element={<Suspense fallback={<LoadingAntd />}> <SuccessVerify /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<LoadingAntd />}> <Contact /></Suspense>} />
      <Route path="/partner" element={<Suspense fallback={<LoadingAntd />}> <BecomePartner /></Suspense>} />
      <Route path="/success_payment" element={<Suspense fallback={<LoadingAntd />}> <SuccessPayment /></Suspense>} />
      <Route path="/favourite" element={<Suspense fallback={<LoadingAntd />}> <FavouritePage /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<LoadingAntd />}> <Home /></Suspense>} />

    </Routes>

        
     
  )
}

export default App