import React from 'react'
import './about.css'

export default function About() {
    return (
        <>
            <section className=' ' >
                <div className='card bg-danger '>
                    <div className="card-body">
                        <div>
                            <img src="https://t3.ftcdn.net/jpg/04/15/35/64/360_F_415356406_40uPqc7ZvgdkRpWpt7JVb1YcssihXQrS.jpg" alt="human-logo-img" className=' card-img ' />

                        </div>
                        <div className=' d-lg-flex flex-column gap-lg-3 text-capitalize'>

                            <h1 className="card-title">Elevating Everyday Moments with the Art of Shopping</h1>
                            <p className='card-para'> In today's world, where choices abound, shopping is more than a task. It's a chance to back businesses with our values - be it eco-friendly, ethical, or community-minded.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>)
}
