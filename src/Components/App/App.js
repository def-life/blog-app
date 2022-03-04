import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './App.css';
import Footer from '../Footer/Footer';
import { Routes, Route, useNavigate} from 'react-router-dom';
import PostPage from '../PostPage/PostPage';
import Home from '../Home/Home';
import About from "../About/About"
import NewPost from '../NewPost/Newpost';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';

function App() {
  console.log("app rendered");

  const title = "React JS Blog";

  // state variables 
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021, 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021, 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021, 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021, 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  // additional hooks
  const navigate = useNavigate();

  function deletePost(id) {
    setPosts(posts.filter((post) => {
      return !(post.id === id);
    }));
    // redirect the app to home
    navigate("/", {state: "dog is love"})
    
  }

  return (
    <div className="app">
      <Header title={title}/>
      <Nav search={search} setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search} posts={posts} setPosts={setPosts}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<NewPost posts={posts} setPosts={setPosts}/>} />
          <Route path="/post/:id" element={<PostPage posts={posts} deletePost={deletePost}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
