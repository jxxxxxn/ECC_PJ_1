import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, FriendList, LinkUpload, MyPage, Post, PostEdit } from "./pages";
import { MainLayout } from "./components";
import { Login, LoginOk, SignUp, SetNickname } from "./pages/login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/loginok" element={<LoginOk />} />
          <Route path="/setnickname" element={<SetNickname />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/linkupload" element={<LinkUpload />} />
            <Route path="/friendlist" element={<FriendList />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/post/edit/:id" element={<PostEdit />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
