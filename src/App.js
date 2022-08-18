import "./App.css";
import Home from "./Page/Home";
import Error404 from "./Page/Error404";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
