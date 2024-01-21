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

                            <h1 className="card-title">human develpor online shopping</h1>
                            <h3 className='card-title'>online shopping getway </h3>
                            <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut aliquid voluptatem cumque aspernatur necessitatibus voluptatibus pariatur, explicabo facilis provident, cupiditate cum recusandae nam at, minus sapiente dolor qui reiciendis?</p>
                        </div>

                    </div>
                </div>
            </section>

        </>)
}
