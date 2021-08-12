import "antd/dist/antd.css";
import "./App.scss";
import { Layout } from "antd";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Request from "./pages/request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Header>Header</Header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/request" component={Request} />
          </Switch>

          <Footer>Footer</Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
