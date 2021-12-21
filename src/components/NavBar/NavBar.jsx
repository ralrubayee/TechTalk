import { Link } from 'react-router-dom'
import logo from '../../assets/images/conversation.png'

const NavBar = ({ user, handleLogout }) => {
  console.log(user)
  return (
    <>
      {user ?
        // <nav>
        //   <ul>
        //     <li>Welcome, {user.name}</li>
        //     <li><Link to="/profiles">Profiles</Link></li>
        //     <li><Link to="/posts">Post</Link></li>
        //     <li><Link to="/jobs">Jobs</Link></li>
        //     <li><Link to="/profiles/:id">ProfileInfo</Link></li>
        //     <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
        //   </ul>
        // </nav>


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
              
            </div>

          </ul>

        </nav>
          

      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>



      }
    </>
  )
}

export default NavBar
