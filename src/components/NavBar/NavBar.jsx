import { Link } from 'react-router-dom'
import logo from '../../assets/images/conversation.png'

const NavBar = ({ user, handleLogout }) => {
  console.log(user)
  return (
    <>
    <header>
      <nav className="navbar">
        <div class="logo">
            TechTalk<img 
              src={logo} 
              alt="TechTalk Logo"
              id="logo-img"
              /> 
        </div>
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          
          <div class="menu">
            {user ?
            <>
              <li><Link to="/profiles">Profiles</Link></li>
              <li><Link to="/posts">Post</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/profiles/:id">ProfileInfo</Link></li>
              <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            </>
              :
            <>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
            }
          </div>      
        </ul>
      </nav>
</header>
    </>
  )
}
export default NavBar
