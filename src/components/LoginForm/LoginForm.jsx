import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}style={{width:"100%", marginLeft:"50px"}}>
        <label htmlFor="email" className={styles.label} style={{textAlign:"left"}}>Email</label>
        <input
        style={{width:"200px"}}
        className='signUp-input'
        type="text"
        autoComplete="off"
        id="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer} style={{width:"100%"}}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          style={{width:"200px"}}
          className='signUp-input'
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button}>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
