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
        <button className=' navbar-toggler  me-5  ' type='button' data-bs-target='#NavbarTroggler' data-bs-toggle='collapse'><span className=' navbar-toggler-icon '></span></button>
        <div className='collapse navbar-collapse ' id='NavbarTroggler'>
          <ul className='navbar-nav gap-lg-3 gap-3   '>
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
            <li className='nav-item d-block d-lg-none   mx-5'>
        <Link  className='link  pe-lg-3       ' type='button' data-bs-toggle='modal' data-bs-target='#account' >account
            <div className='modal fade ' id='account'>
<div className=' modal-dialog  ' >
  <div className=' modal-content bg-primary-subtle  '>
    <div className=' modal-body '>
              <li className='nav-item  '>
                <Link to={'/register'} className='nav-link text-primary  ' >register</Link>
              </li>
              <li className='nav-item  '>
                <Link to={'/login'} className='nav-link text-danger'>login</Link>
              </li>
    </div>
  </div>
</div>
      
            </div>
  
        </Link>

        </li>
          </ul>
        </div>
        <form action="" className=''>
          <input type='text' placeholder='search'/>
          <button type='submit'> submit</button>
          
        </form>
        <li className='nav-item d-none d-lg-block   mx-5'>
        <Link  className='link  pe-lg-3       ' type='button' data-bs-toggle='modal' data-bs-target='#account' >account
            <div className='modal fade ' id='account'>
<div className=' modal-dialog  ' >
  <div className=' modal-content bg-primary-subtle  '>
    <div className=' modal-body '>
              <li className='nav-item  '>
                <Link to={'/register'} className='nav-link text-primary  ' >register</Link>
              </li>
              <li className='nav-item  '>
                <Link to={'/login'} className='nav-link text-danger'>login</Link>
              </li>
    </div>
  </div>
</div>
      
            </div>
  
        </Link>

        </li>
      </nav>
      
      <Outlet />
    </>
  )
}