import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <section>
<div className='container-fluid bg-color'>
<div className=''>
<address className='p-lg-5 p-2 pt-5'>
  <h3>contact us page information</h3>
  <p className=' address-txt'>
    Name : Bass <br />
    age : 20 years old <br />
worker : web develpor <br />
publisher date : 23/03/2024 <br />
 social media link :<Link><img src="" alt="" /></Link><Link><img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="whatsapp" /></Link><Link><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="facebook" /></Link><Link><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="instagram" /></Link>

  </p>
</address>

</div>
<fieldset className=' border border-danger '>
  <legend className=' text-uppercase '>enter your details </legend>
<form action="POST" className='text-black  card d-flex gap-2  table-bordered '>
  <label htmlFor="name" className=' form-label text-uppercase '>name</label> <input type="text" placeholder='enter your name' className=' form-control border-5  ' />
  <label htmlFor="name" className=' form-label text-uppercase '>age</label> <input type="text" placeholder='enter your age' className='form-control border-5' />
  <label htmlFor="name" className=' form-label text-uppercase '>email</label> <input type="email" placeholder='enter your email id' className='form-control border-5' />
  <label htmlFor="name" className=' form-label text-uppercase '>phone number</label> <input type="number" placeholder='enter your phone number'  className='form-control border-5'/>
  <button type='submit' className=' btn btn-danger  text-uppercase '>submit</button>
</form>
</fieldset>
</div>

    </section>
  )
}
