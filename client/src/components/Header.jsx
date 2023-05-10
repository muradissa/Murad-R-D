import React from 'react';
import logo from './assets/logo.png'
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <nav className='navbar bg-light p-0'>
      {/* <div className='container1' > */}
        <a className='navbar-brand' href='/' >
          <div className='d-flex'>
            <img src={logo} alt='logo' className='' style={{height:"100px",width:"200px"}}/>
            <>
            <div className='justify-content-end'>
              <Button className='outline-success'>Login</Button>
              <Button className='outline-success'>Logout</Button>
            </div></>
          </div>
        </a>
      {/* </div> */}
    </nav>
  )
}
