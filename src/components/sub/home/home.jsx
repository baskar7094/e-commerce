import React from 'react'
import './home.css'
import About from '../about/about'
import Contact from '../contact/contact'
export default function Home() {
  return (
<>    <div className='bgImg lato-regular ' >
      <div className= ' container-fluid ' >
<div className='d-flex flex-column section01   gap-lg-3    justify-content-center align-items-center  '>
<p className='text-sm '>"Transformative Retail Experiences for a Fulfilling Life."</p>
<h1 className=''>"Unlock Extraordinary Joy: Dive into Unmatched Shopping Bliss Today!" </h1>
<h3 className=''>"Shop Smarter, Live Happier: Elevate Your Lifestyle with Unique Retail Delights!"</h3>
<h2 className=' ' >
"Indulge Your Senses: Elevate Every Day with Unforgettable Retail Magic!"<span>Retail Magic!"</span> </h2>
<p className=''  >In today's digital age, shopping has become even more convenient, allowing us to discover a world of options with just a click. t's not just about acquiring things; it's about finding joy in the process. Each item we choose tells a story and contributes to our unique identity. Beyond the tangible goods, shopping is an opportunity to support businesses that align with our values. Choosing brands that prioritize sustainability and ethical practices can make our purchases feel even more meaningful. It's a chance to connect with craftsmanship, celebrate local artisans, and make choices that positively impact the world. As we embark on our shopping adventures, let's consider the transformative power of our choices. Whether it's enhancing our living spaces or investing in self-care, each purchase can contribute to a more intentional and fulfilling life. So, let's savor the moments, enjoy the process, and let shopping be a source of inspiration in our everyday lives.</p>
</div>

</div>

    </div>
<About/>
<Contact/>
    </>
  )
}


