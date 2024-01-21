import React from 'react'
import './home.css'
import About from '../about/about'
import Contact from '../contact/contact'
export default function Home() {
  return (
<>    <div className='bgImg'>
      <div className= ' container-fluid ' >
<div className='d-flex flex-column section01   gap-lg-3    justify-content-center align-items-center  '>
<p className='text-sm '>hollo everyOne welcome this page </p>
<h1 className=' '>world populatest website in 2024 </h1>
<h3 className=''>best discount cupons & free shipping & free giviway</h3>
<h2 className=' ' >most visit website in <span>live 100+millions vistors</span> </h2>
<p className=''  >I being a shop o' holic love to shop. We shop as per our needs we shop in many waysNowadays there are many ways of shopping any item from groceries to your clothes . Some of the ways are you can go to a market , call for the product you wish to buy and the best is one is online shopping. So shopping online is the best way of shopping bcoz it saves time you can see reviews of products and you can easily return the product. So shopping means buying a product .</p>
</div>

</div>

    </div>
<About/>
<Contact/>
    </>
  )
}


