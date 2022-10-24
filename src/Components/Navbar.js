import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Total Pizza Mastery</h1>
            <Link to="/">Home</Link>
            <Link to="/ingredients">Toppings</Link>
            <Link to="/pizzas">Pizzas</Link>
        </nav>
    )
}

export default Navbar