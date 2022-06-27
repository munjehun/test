import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import PostList from "./pages/PostList";
import PostView from "./pages/PostView";
import PostWrite from "./pages/PostWrite";
import PostEdit from "./pages/PostEdit";

// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/postview" element={<PostView />} />
        <Route path="/postwrite" element={<PostWrite />} />
        <Route path="/postedit" element={<PostEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
