import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

function BookCard() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card onClick={handleShow} className='btn shadow'>
        <div className="image-container">
          <Card.Img height={'200px'} variant="top" src="https://the-bibliofile.com/wp-content/uploads/histmystblogimage.psd.jpg" />
          <div className="overlay">
            <Button variant="primary">Buy Now</Button>
          </div>
        </div>
        <Card.Body>
          <Card.Title>Mystery</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://www.pbs.org/wgbh/masterpiece/wp-content/uploads/2020/08/mystery-book-cover-long-way-home-1920x1080-1-1024x576.jpg" alt="" />
            </div>
            <div className='col-lg-6'>
              <h3>Long Way Home</h3>
              <h6 className="fw-bolder">
                Author: <span className='text-danger'>Eva Dolan</span>
              </h6>
              <div className="d-flex">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
              </div>
              <p>Price: $20</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookCard;
