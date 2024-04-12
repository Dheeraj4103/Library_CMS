import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
    <>
    <nav className="navbar">
      <div className="container">
        <div className='nav-elements' >  
          <ul>
            <li>
              <Link>Content Management System</Link>
            </li>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                 <Link to='/addbooks'>Add Books</Link>
            </li>
            <li>
                <Link to='/displayinfo'>Display Books</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar