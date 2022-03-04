import { Link } from "react-router-dom";
import Post from "../Post/Post";
import "./home.css";

export default function Home({ posts, search }) {
  return (
    <main>
      <div className="container">
        {!posts.length && "NO POST YET"}
        {posts
          .filter((post) => {
            return (
              post.body.toLowerCase().includes(search) ||
              post.title.toLowerCase().includes(search)
            );
          })
          .map((post) => {
            return (
              <Link key={post.id} to={`post/${post.id}`}>
                <Post
                  title={post.title}
                  description={
                    post.body.length < 25
                      ? post.body
                      : "".concat(post.body.substr(0, 26), "...")
                  }
                  dateTime={post.datetime}
                />
              </Link>
            );
          })}
      </div>
    </main>
  );
}
