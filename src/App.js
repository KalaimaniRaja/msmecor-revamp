import "antd/dist/antd.css";
import "./App.scss";
import { Layout } from "antd";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Home />
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
