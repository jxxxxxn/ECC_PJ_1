import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { MainLayout } from "./components";
import { Login, LoginOk, SignUp, SetNickname } from "./pages/login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/loginok" element={<LoginOk />} />
          <Route path="/setnickname" element={<SetNickname />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
