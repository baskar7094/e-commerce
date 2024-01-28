import React, { useState } from 'react'

export default function Login() {
    const [name,setname] = useState('')
    const [age,setage] = useState('')
    const [number,setnumber] = useState('')
    const [address,setaddress] = useState('')
    const [pass,setpass] = useState()
    const [confirmpass,setconfirmpass] = useState()
    const [submit,setsubmit] = useState(true)
    

    
    return (
        <div>

            <div>
                <fieldset className='border border-3 w-50 mx-auto pt-2 pt-sm-4 '>
                    <legend className='text-primary'>form vaildtation </legend>
                    <form action="POST " className='bg-secondary d-flex  flex-column w-100'>
                        <label htmlFor="name" className=' form-label ps-lg-5 '>username</label>
                        <input type="text" value={''} placeholder='enter your username' required onChange={''} className=' form-control ' />
                        <label htmlFor="name" className=' form-label ps-lg-5 '>lastname</label>
                        <input type="text" value={''} placeholder='enter your lastname' required onChange={''} className=' form-control ' />
                        <label htmlFor="name" className=' form-label ps-lg-5 '>age</label>
                        <input type="number" value={''} placeholder='enter your age' required onChange={''} className=' form-control ' />
                        <label htmlFor="name" className=' form-label ps-lg-5 '>phonenumber</label>
                        <input type="number" value={''} placeholder='enter your mobile number' required onChange={''} className=' form-control ' />
                        <label htmlFor="name" className=' form-label ps-lg-5 '>address</label>
                        <input type="text" value={''} placeholder='enter your address' required onChange={''} className=' form-control ' />
                        <label htmlFor="name" className=' form-label ps-lg-5 '>password</label>
                        <input type="password" value={''} placeholder='enter your vaild password' required onChange={''} className=' form-control ' />
                        <label htmlFor="name" className=' form-label ps-lg-5 '>confirm password</label>
                        <input type="password" value={''} placeholder='enter your same confirm password' required onChange={''} className=' form-control ' />
                        <button type='submit' className=' btn btn-mute text-capitalize  fw-bold fs-4 '>register</button>
                    </form>
                </fieldset>

            </div>
        </div>
    )
}
