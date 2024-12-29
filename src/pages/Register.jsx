import React, { useState } from 'react'
import '../styles/login.css'

import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })

      const data = await response.json()
      if (data.success) {
        navigate('/login')
      } else {
        alert(data.message)
      }
    } catch (err) {
      console.error('Failed to register:', err)
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="login" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" id="username" placeholder='Username' required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" id="email" placeholder='Email' required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" id="password" placeholder='Password' required onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type='submit'>Create Account</Button>
                </Form>
                <p>Already have an account ? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register
