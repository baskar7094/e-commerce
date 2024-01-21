import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'

export default function Layout() {
  return (
    <>
      <nav className='navbar gap-lg-1 gap-sm-1   navbar-expand-lg  bg-danger container-fluid text-white '>
        <Link to={'/'} className=' navbar-brand '>
          <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30143400/210.png' alt='online-shooping' />
        </Link>
        <button className=' navbar-toggler  ' type='button' data-bs-target='#NavbarTroggler' data-bs-toggle='collapse'><span className=' navbar-toggler-icon '></span></button>
        <div className='collapse navbar-collapse ' id='NavbarTroggler'>
          <ul className='navbar-nav gap-lg-3'>
            <li className='nav-item'>
              <Link to={'/'} className='link'>home</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/about'} className='link'>about</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/contact'} className='link'>contact us</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/collections'} className='link'>products</Link>
            </li>
        <li>
        <Link to={'/login'} className='link pe-lg-3   d-lg-none  ' >login</Link>

        </li>
          </ul>
        </div>
        <form action="" className=''>
          <input type='text' placeholder='search'/>
          <button type='submit'> submit</button>
          
        </form>
        <h5 className='link pe-lg-1   p-lg-3  d-none  d-lg-flex pe-lg-4  '>login</h5>
      </nav>
      
      <Outlet />
    </>
  )
}