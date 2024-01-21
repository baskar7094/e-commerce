import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../layout.css'

export default function ProductLayout() {
  return (
    <>
      <nav className='navbar gap-lg-5  navbar-expand-lg  bg-danger container-fluid text-white '>
        <Link to={'/'} className=' navbar-brand '>
          <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30143400/210.png' alt='online-shooping' />
        </Link>
        <button className=' navbar-toggler  ' type='button' data-bs-target='#NavbarTroggler' data-bs-toggle='collapse'><span className=' navbar-toggler-icon '></span></button>
        <div className='collapse navbar-collapse ' id='NavbarTroggler'>
          <ul className='navbar-nav gap-lg-4'>
            <li className='nav-item'>
              <Link to={'/'} className='link'>home</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/about'} className='link'>mobile</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/contact'} className='link'>watches</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/Productlayout'} className='link'>shoes</Link>
            </li>
          </ul>
        </div>
        <form action="">
          <input type='text' placeholder='search'/>
          <button type='submit'> submit</button>
          
        </form>
        <h5 className='link pe-lg-3'>login</h5>
      </nav>
      
      <Outlet />
    </>
  )
}