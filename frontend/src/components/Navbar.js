import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 style={{ paddingLeft: 13 }}>Home</h1>
            </Link>

            <Link to='/create'style={{ textDecoration: 'none' }}>
                <h1 style={{ paddingLeft: 13, margin: 12}}>Create</h1>
            </Link>
        </div>
    );
}
 
export default Navbar;