import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { MainLayout } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
