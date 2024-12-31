import "./App.css";
import Home from "./component/home";
import Products from "./component/products";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./component/login";
import Header from "./component/header";
import Footer from "./component/footer";

const Layout = ({ children }) => {
  const location = useLocation().pathname !== "/";
  return (
    <>
      {location && <Header />}
      <>{children}</>
      {location && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
