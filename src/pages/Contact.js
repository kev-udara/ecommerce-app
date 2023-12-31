import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"}/>
      <BreadCrumb title='Contact Us'/>
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7917.495899140354!2d80.054692!3d7.1551135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd2befaf7e45%3A0x2ab60626cdb39c80!2sVeyangoda!5e0!3m2!1sen!2slk!4v1687941978104!5m2!1sen!2slk" 
            width="600" 
            height="450" 
            className="border-0 w-100" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe> 
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
              <h3 className='contact-title mb-4'>Contact Us</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="text" className="form-control" placeholder='Name'/>
                </div>
                <div>
                  <input type="email" className="form-control" placeholder='Email'/>
                </div>
                <div>
                  <input type="tel" className="form-control" placeholder='Mobile Number'/>
                </div>
                <div>
                  <textarea 
                   name="" 
                   id="" 
                   className='w-100 form-control' 
                   cols="30" 
                   rows="4"
                   placeholder='Comment'
                   >
                   </textarea>
                </div>
                <div>
                  <button className='button border-0'>Submit</button>
                </div>
              </form>
              </div>
              <div>
              <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <AiOutlineHome className='fs-5'/>
                  <address className='mb-0'>
                  Demo Store,
                  No. 2259 Freedom, New York, 11111
                  United States.
                  </address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BiPhoneCall className='fs-5'/>
                  <a href="tel:+91 323232323">
                  +91 323232323
                  </a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <AiOutlineMail className='fs-5'/>
                  <a href="mailto:mdsamarasinghe53@gmail.com">
                  mdsamarasinghe53@gmail.com
                  </a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BiInfoCircle className='fs-5'/>
                  <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                  </li>
                </ul>
              </div>
              </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact