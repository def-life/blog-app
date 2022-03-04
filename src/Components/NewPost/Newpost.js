import { createRef } from "react";
import "./newPost.css";
import { useNavigate } from "react-router-dom";

export default function NewPost({ posts, setPosts }) {
  // creating refs
  const desc = createRef();
  const title = createRef();
  const navigate = useNavigate();

  function addPost(ev) {
    ev.preventDefault(); // prevent reloading of react app

    const post = {};

    post.title = title.current.value;
    post.body = desc.current.value;
    post.id = posts.length + 1;

    // a better option than this can be using Intl.DateTime in js
    post.datetime = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    console.log(post);

    setPosts([post, ...posts]);

    // clear the form input form and navigate to home page
    ev.target.reset();
    navigate("/", { state: "dog is lob!" });
  }

  return (
    <div className="container">
      <form onSubmit={addPost} className="form">
        <div>
          <label htmlFor="title" id="title">
            Title
          </label>
          <input
            ref={title}
            type="text"
            required
            className="title"
            id="title"
          />
        </div>
        <div>
          <label htmlFor="desc" id="desc">
            Description
          </label>
          <textarea ref={desc} required className="desc" id="desc" />
        </div>
        <button>Add Post</button>
      </form>
    </div>
  );
}
