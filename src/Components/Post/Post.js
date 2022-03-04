import "./post.css";

export default function Post({title, description, dateTime}) {
    return(
        <div className="post">
            <h2 className="title">{title}</h2>
            <p className="dateTime">{dateTime}</p>
            <p className="description">{description}</p>
        </div>
    )
}