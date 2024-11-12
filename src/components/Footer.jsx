import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px',backgroundColor:'pink'}} className='container mt-5 w-100 shadow'>
      <div className="d-flex justify-content-between">
        <div style={{width:'400px'}} className="intro">
          <h5><i className='fa-solid fa-book me-2'></i>bookStore</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ratione asperiores quisquam obcaecati nam dolorum a laborum! Repellat quasi illum atque? Quas, minus! Impedit facere ea eos iure, sunt error!</p>
          <p>Code licenced Luminar, docs CC by 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none'}}>Home Page</Link>
          <Link to={'/login'} style={{textDecoration:'none'}}>Login Page</Link>
          <Link to={'/register'} style={{textDecoration:'none'}}>Register Page</Link>
        </div>
        <div className="d-flex flex-column">
          <h5>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none'}} target='_blank'>React</a>
            <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none'}} target='_blank'>React Bootstrap</a>
            <a href="https://reactrouter.com/en/main" style={{textDecoration:'none'}} target='_blank'>React Router</a>
        </div>
        <div className="d-flex flex-column">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Enter your email here' type="text" className='form-control' />
            <button className='btn btn-info ms-2'> <i className='fa-solid fa-arrow-right'></i> </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-facebook'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-github'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-solid fa-phone'></i> </a>


        </div>
        </div>
       
      </div>
      <p className="text-center mt-3">Copyright @copy; June 2024 Batch, Book Store.
        Built with React.</p>
    </div>
  )
}

export default Footer