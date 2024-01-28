import React from 'react'
import { Link } from 'react-router-dom'
import './collections.css'
const brandImg = `https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190851/Louis-Vuitton-1.png`




export default function Collection() {
  return (
    <div>
      
<div className=' flex  '>

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg} 
brand={'realme narzo 60 5G'}
 dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
 discount={`  $${20}% `} 
 total={15000}
 />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`  $${20}% `}
   total={15000}
   />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`  $${20}%  `}
   total={15000}
   />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`  $${20}%  `}
   total={15000}
   />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`  $${20}%  `}
   total={15000}
   />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`   ${20}%  `}
   total={15000}
   />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`  $${20}%  `}
   total={15000}
   />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`  $${20}%  `}
   total={15000}
   />

<Cards 
img={`https://m.media-amazon.com/images/I/8195A49fZbL._SX679_.jpg`}
 brandImg={brandImg}
  brand={'realme narzo 60 5G'} 
  dec={`(Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger` }
  discount={`  $${20}% `}
   total={15000}
   />
   <Cards 
   img={''}/>


</div>
    </div>
  )
}

function Cards(props){
    return(
        <>
        <section>
                <div className=' card-container  '>
                    <div className="card-control  border-secondary border p-3 ">
                        <img src={props.img} alt={props.alt} className=' '  />
                        <h1 className='card-title fs-4 text-capitalize'>{props.brand}</h1>
                        <strong className='text-black'><b className='text-black fs-6'>{props.dec}</b></strong>
                       <div>
                       
                       <p className='w-full text-black fs-6  text-capitalize '> <img className='amzon-brand' src={props.brandImg} alt="realme nerzo 50 5G"  />for relame narzo 60 5G </p>
                       <Link className=' card-link   '>Visit the realme Store</Link>

                       </div>
                        <div>
                        <h3 className='text-black fs-4'> <b className='text-success text-uppercase fs-6  '> discount price</b> <br/> {props.discount}  <span className='text-black'>{props.total}</span></h3>

                        </div>
                    </div>
                </div>
        </section>
        
        </>
    )
}


 export const mobiles = {
    iphone:{
        id:1,img:'',itemname:'iphone',price:60000,decribtion:'good camera good quilty'},
mi:{
}
    }


