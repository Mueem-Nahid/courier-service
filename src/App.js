import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddService from './Pages/AddService/AddService';
import GetTheService from './Pages/GetTheService/GetTheService';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import User from './Pages/User/User';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about-us">
          <AboutUs></AboutUs>
        </Route>
        <PrivateRoute path="/get-the-service/:id">
          <GetTheService></GetTheService>
        </PrivateRoute>
        <PrivateRoute path="/my-orders/user/:email">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path="/manage-orders">
          <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>
        <PrivateRoute path="/add-service">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/user">
          <User></User>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
