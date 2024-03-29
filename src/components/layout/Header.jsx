/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Navbar
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Header = () => {
  const item = useSelector(state => state.cart);
  console.log(item);

  return (
    <>
      <nav className=' navbar navbar-expand-lg navigation-wrap'>
        <div className='container-fluid'>
          <div className='text-light para'>Free Home delivery </div>
          <a
            href='https://api.whatsapp.com/send/?phone=923459392512'
            rel='noreferrer'
            target='_blank'
            className='pc-wa nav-link'>
            <FaWhatsapp color='white' size={22} /> 0345-9392512
          </a>
          {/* <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul> */}
          <span className='navbar-text'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                <a
                  href='https://api.whatsapp.com/send/?phone=923459392512'
                  rel='noreferrer'
                  target='_blank'
                  className='nav-link'>
                  <FaWhatsapp color='white' size={22} /> 0345-9392512
                </a>
              </li>

              <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                <a href='mailto:Paizarhandmade@gmail.com' className='nav-link'>
                  <span>
                    <FaEnvelope color='#fff' size={22} />{" "}
                    Paizarhandmade@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
      <div className='navigation-wrap m-auto'>
        <div className='container m-auto'>
          <marquee behavior='smooth' direction='' className='text-light m-auto'>
            Order now and get a discount of Rs.1000 on orders over and above
            Rs.5000
          </marquee>
        </div>
      </div>

      <header>
        <div className='custom-container-1'>
          <nav className='navbar navbar-expand-lg  our-nav'>
            <div className='container-fluid'>
              <div className='header-logo'>
                <a className='navbar-brand' href='/'>
                  <div className='header-logo-img'>Paizar</div>
                </a>
                {/* <div className='header-input'>
                  <input type='search' placeholder='Search courses..' />
                  <span>
                    <i className='fa-regular fa-magnifying-glass' />
                  </span>
                </div> */}
              </div>

              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
              </button>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav menu'>
                  <li>
                    <a className='menu-first-a' href='#'>
                      Home
                    </a>
                  </li>

                  <li>
                    <a className='menu-first-a' href='#'>
                      Category
                    </a>
                    <ul className='dropdown'>
                      <li>
                        <a className='dropdown-a' href='#'>
                          Man
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-a' href='#'>
                          Woman
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-a' href='#'>
                          Kids
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className='menu-first-a' href='#'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className='menu-first-a' href='#'>
                      About
                    </a>
                  </li>
                  <li>
                    <a className='menu-first-a' href='../Contuct/index.html'>
                      Contuct
                    </a>
                  </li>
                  <li>
                    <div className='menu-shopping'>
                      <a className='menu-shopping-card' href='#'>
                        <span>
                          <i className='fa-regular fa-cart-shopping' />
                        </span>
                      </a>
                      <span>{item.length}</span>
                    </div>
                  </li>
                  {/* <li>
                    <a
                      href='https://api.whatsapp.com/send/?phone=923459392512'
                      target='_blank'
                      rel='noreferrer'>
                      <FaWhatsapp size={30} color='green' />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
