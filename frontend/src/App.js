import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import CreatePost from "./stories/Create";
import Stories from "./stories/Stories";
import StoryUpdate from "./stories/StoryUpdate";
import Header from "./header/Header";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/signup" element={<Auth />} />
          {isLoggedIn && (
            <>
              <Route path="/create" element={<CreatePost />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<StoryUpdate />} />{" "}
            </>
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
