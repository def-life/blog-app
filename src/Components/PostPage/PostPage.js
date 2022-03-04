import { useParams } from "react-router-dom";
import Post from "../Post/Post";
import "./postPage.css";

export default function PostPage({ posts, deletePost }) {
  const id = useParams().id;
  const post = posts.find((post) => {
    return post.id === parseInt(id);
  });
  console.log(post);
  return (
    <>
      {!post && id >= posts.length && <p style={{color: "red", fontSize: "1.3em", marginTop: "1em", marginBottom: "1em"}}>{`Post with id ${id} doesnot exist`}</p>}
      {post && (
        <>
          <div className="container">
          <Post
            title={post.title}
            description={post.body}
            dateTime={post.datetime}
          />
          <button
            onClick={(ev) => {
              deletePost(post.id);
            }}
            className="delete"
          >
            Delete Post
          </button>
          </div>
        </>
      )}
    </>
  );
}
