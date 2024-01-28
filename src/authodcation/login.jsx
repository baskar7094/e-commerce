import React, { useState } from 'react'

export default function Login() {
    const [email,setemail] = useState()
    const [pass,setpass] = useState()
  return (
    <div>
<fieldset className='border border-3 w-50 mx-auto mt-3 mt-sm-4 pt-3 pt-sm-4 '>
    <legend>login page</legend>
    <form action="POST" className='bg-secondary'>
        <label htmlFor="email" className=' form-label '>emailid</label>
        <input type="email" value={''} onchange={''} placeholder='enter your email' className=' form-control ' />
        <label htmlFor="password" className=' form-label '>password</label>
        <input type="password" value={''} onchange={''} placeholder='enter your email' className=' form-control ' />
        <button type='submit' className='btn btn-secondary  text-center w-100 border  fw-bold'>submit</button>
    </form>
</fieldset>
    </div>
  )
}
