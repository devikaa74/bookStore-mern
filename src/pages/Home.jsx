// rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/landingImg.gif'
import { Card } from 'react-bootstrap';
import BookCard from '../components/BookCard';

const Home = () => {

  return (
    <>
      <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }}><i className="fa-solid fa-book"> </i>Book Store</h1>
              <p style={{ textAlign: 'justify' }}>Discover a Wide Selection Of Books Suitable For Every Reader's Taste. Shop Now. Read Customer Reviews & Find Best Sellers. Free, Easy Returns On Millions Of Items!!!
              </p>
                        
                {/* <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link> */}
              
                <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
                      
             </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={landingImg} alt="landing" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center" style={{backgroundColor:'#E6E6FA'}}>
        <h1 className='mb-5'>Our BestSellers!</h1>
        <marquee>
          <div className="d-flex">
           
              <div className="me-5">
              <BookCard/>
            </div>
            
            
          </div>
        </marquee>
        <button className='btn btn-link mt-5 text-warning'>CLICK HERE TO VIEW MORE...</button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Customer Reviews</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://tse2.mm.bing.net/th?id=OIP.xpmspqmeooIchs0zi7aJ9wHaHa&pid=Api&P=0&h=220" alt="" />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                  <i className="fa-solid fa-star text-warning"></i>

                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://tse1.mm.bing.net/th?id=OIP.PqBYGErQeWQWhbA_VeUBDQHaHa&pid=Api&P=0&h=220" alt="" />
                <span>Alexia Monte</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                  <i className="fa-solid fa-star text-warning"></i>

                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                <span>John Davis</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                  <i className="fa-solid fa-star text-warning"></i>

                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>
    </>
  )
}

export default Home