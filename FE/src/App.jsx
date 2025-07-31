import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, FriendList, LinkUpload } from "./pages";
import { MainLayout } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/linkupload" element={<FriendList />} />
            <Route path="/friendlist" element={<LinkUpload />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
