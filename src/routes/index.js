import ProductDetailPage from "../components/ProductDetailPage/ProductDetailPage";
import SigninPage from "../components/SigninPage/SigninPage";
import SignupPage from "../components/SignupPage/SignupPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OderPage/OrderPage";
import ProDuctsPage from "../pages/ProductsPage/ProductsPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
     {
          path: '/',
          page: HomePage,
          isShowHeader: true
     },
     {
          path: '/OrderPage',
          page: OrderPage,
          isShowHeader: true
     },
     {
          path: '/ProductsPage',
          page: ProDuctsPage,
          isShowHeader: true
     },
     {
          path: '/Sign-in',
          page: SigninPage,
          isShowHeader: false
     },
     {
          path: '/Sign-up',
          page: SignupPage,
          isShowHeader: false
     },
     {
          path: '/Products-Detail',
          page: ProductDetailPage,
          isShowHeader: true
     },
     {
          path: '/:type',
          page: TypeProductPage,
          isShowHeader: true
     },
     {
          path: '*',
          page : NotFoundPage,
     }
]