/** @format */

import React, { useState } from "react";
import { BsEye, BsHeartFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import bestSeller from "../../data/bestSeller.json";

const Section2 = () => {
  const [select, setSelect] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container-fluid '>
      <section className='categori'>
        <h2 className='title_1'>
          <span>Best seller products</span>
        </h2>
        <div className='custom-container-2 mt-5'>
          <div className='categori-item '>
            <div className='row g-3'>
              {bestSeller.map((data, id) => {
                return (
                  <div className='col-lg-3 col-md-3 col-6' key={id}>
                    <div className='categori-card card1'>
                      <img className='w-100' src={data.imgUrl} alt='' />
                      <div className='go-corner' href='#'>
                        <div className='go-arrow'>
                          <BsHeartFill />
                        </div>
                      </div>
                      <div className='categori-card-body'>
                        <div className='wrappers'>
                          <div
                            className='btns m-auto'
                            onClick={() => {
                              setSelect(data);
                              handleShow();
                            }}>
                            <div className='side default-side'>Quick View</div>
                            <div className='side hover-side'>
                              <BsEye size={22} />
                            </div>
                          </div>
                        </div>

                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Body>
          <div className='row cardd'>
            <div className='col-sm-6 p-0'>
              <div className='box1'>
                <img
                  src={select?.imgUrl}
                  className='m-auto d-block'
                  width='85%'
                  alt=''
                />
                <p className='textOne'>
                  Available <span className='textTwo'>Sizes</span>
                </p>
                <ul className='menu list-inline'>
                  <li>{select?.size}</li>

                  <div className='badboy' />
                </ul>
                <p className='textThere'>Full Detail</p>
              </div>
            </div>
            <div className='col-sm-6 p-0'>
              <div className='box2'>
                <div className='text-center'>
                  <i className='fas fa-balance-scale' />
                  <p className='textFour'>{select?.title}</p>

                  <BsStarFill color='yellow' />
                  <BsStarFill color='yellow' />
                  <BsStarFill color='yellow' />
                  <BsStarFill color='yellow' />
                  <BsStarHalf color='yellow' />
                </div>
                <p className='bigText'>{select?.des}</p>
                <div className='text-center'>
                  <p className='number2'>
                    Rs: {select?.pricePKR}{" "}
                    <span className='number3'>{select?.priceDollar}$</span>
                  </p>

                  <a
                    rel='noreferrer'
                    href='https://api.whatsapp.com/send/?phone=923459392512'
                    target='_blank'
                    className='course-btn'>
                    Place Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Section2;
