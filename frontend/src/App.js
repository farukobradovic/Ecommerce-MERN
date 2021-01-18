import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} exact />
            <Route path='/cart/:id?' component={CartScreen} exact />
            <Route path='/login' component={LoginScreen} exact />
            <Route path='/register' component={RegisterScreen} exact />
          </Container>
        </main>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
