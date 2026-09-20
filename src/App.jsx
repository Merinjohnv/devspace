import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import MyPosts from "./pages/MyPosts";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Bookmarks from "./pages/Bookmarks";
import Categories from "./pages/Categories";

function App() {
  return (

    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/my-posts" element={<MyPosts />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;