import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav({ search, setSearch }) {
  function handleChange(ev) {
    console.log(ev.target.value);
    setSearch(ev.target.value);
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="input">
          <input type="text" value={search} onChange={handleChange} placeholder="Search Posts" />
        </div>
        <div className="nav">
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="./post">Post</NavLink>
                <NavLink to="./about">About</NavLink>
            </ul>
        </div>
      </div>
    </div>
  );
}
