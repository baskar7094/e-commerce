import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Pratice() {
    return (
        <div className='bg-danger p-5 '>
            <h1>pratice</h1>


            <Crud />
        </div>
    )
}

function Crud(){
    const [data,setdata] = useState([])
    const [newItem,setnewItem] = useState('')
    const [edit,setedit] = useState(null)
    
    useEffect(()=>{

    },[])

async  function FacthData(){
   
   try{

    const response = await axios.get('https://dummyjson.com/carts')
   setdata(response.data);
   }
   catch(err){
console.log(err);
   }

}


async function AddItem(){
    try{
await axios.post('https://dummyjson.com/carts',{price:edit});
FacthData();
setnewItem('')
    }
    catch(err){
console.log(err);
    }
}

async function EditItem(){
    try{
await axios.put('https://dummyjson.com/carts',{price:newItem});
FacthData();
setedit(null)
    }
    catch(err){
console.log(err);
    }
}

async function DeleteItem(){
    try{
await axios.delete('https://dummyjson.com/carts')
    }
    catch(err){
console.log(err);
    }
}


    return(
        <>
        <h3>cr</h3>
   <ul>
        {data.map((item) =>  (
          <li key={item.id}>
            {EditItem === item.id ? (
              <div>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => setnewItem(e.target.value)}
                />
                <button onClick={() => EditItem(item.id, newItem)}>Save</button>
              </div>
            ) : (
              <div>
                {item.price}
                <button onClick={() => EditItem(item.id)}>Edit</button>
                <button onClick={() => DeleteItem(item.id)}>Delete</button>
              </div>
            )}
        
          </li>
        ))}
        <div>
                <input
                  type="text"
                  value={'baskar'}
                  onChange={(e) => setnewItem(e.target.value)}
                />
                <button onClick={() => EditItem(item.id, newItem)}>Save</button>
              </div>
              {data}
        </ul>
        
        </>
    )
}