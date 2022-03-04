import "./header.css";

export default function Header({title}) {
    return (
        <header>
            <h2 className="container">{title}</h2>
        </header>
        
    )
}