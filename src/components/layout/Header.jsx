/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Navbar
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const Header = () => {
  return (
    // <header>
    //   <nav className=' navbar navbar-expand-lg navigation-wrap'>
    //     <div className='container-fluid'>
    //       <div className='navbar-brand'>Free Home delivery </div>

    //       <div className='collapse navbar-collapse' id='navbarText'>
    //         <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
    //         <span className='navbar-text'>
    //           <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    //             <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
    //               <a
    //                 href='https://api.whatsapp.com/send/?phone=923459392512'
    //                 rel='noreferrer'
    //                 target='_blank'
    //                 className='nav-link'>
    //                 <FaWhatsapp color='green' size={22} /> 0345-9392512
    //               </a>
    //             </li>

    //             <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
    //               <a
    //                 href='mailto:Paizarhandmade@gmail.com'
    //                 className='nav-link'>
    //                 <FaEnvelope color='#000' size={22} />{" "}
    //                 Paizarhandmade@gmail.com
    //               </a>
    //             </li>
    //           </ul>
    //         </span>
    //       </div>
    //     </div>
    //   </nav>

    // </header>
    <header>
      <div className='custom-container-1'>
        <nav className='navbar navbar-expand-lg  our-nav'>
          <div className='container-fluid'>
            <div className='header-logo'>
              <a className='navbar-brand' href='#'>
                <div className='header-logo-img'>Paizar</div>
              </a>
              <div className='header-input'>
                <input type='search' placeholder='Search courses..' />
                <span>
                  <i className='fa-regular fa-magnifying-glass' />
                </span>
              </div>
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
                  <a className='menu-first-a' href='../Home/index.html'>
                    Home
                  </a>
                </li>
                <li>
                  <a className='menu-first-a' href='#'>
                    Browse Courses
                  </a>
                </li>
                <li>
                  <a className='menu-first-a' href='#'>
                    About
                  </a>
                </li>
                <li>
                  <a className='menu-first-a' href='#'>
                    Blog
                  </a>
                  <ul className='dropdown'>
                    <li>
                      <a className='dropdown-a' href='#'>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-a' href='#'>
                        Blog Details
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-a' href='#'>
                        Elements
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='menu-first-a' href='../Contuct/index.html'>
                    Contuct
                  </a>
                </li>
                {/* <li>
                  <div className='menu-shopping'>
                    <a className='menu-shopping-card' href='#'>
                      <span>
                        <i className='fa-regular fa-cart-shopping' />
                      </span>
                    </a>
                    <span>1</span>
                  </div>
                </li> */}
                <li>
                  <a href='https://api.whatsapp.com/send/?phone=923459392512' target="_blank"  rel="noreferrer" >
                  <FaWhatsapp size={30} color="green" />

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
