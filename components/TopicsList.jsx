import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
// import {HiPencilAlt}  from 'rect-icons/hi'
const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      cache:"no-store"
    })

    if (!res.ok) {
      throw new Error("Faild to fetch data")
    }

    return   res.json();
  } catch (error) {
    console.log("Error loading products...",error)
  }
}
const TopicsList = async () => {
  const {products} = await getProducts()
  return (
    <>
      {
        products.map((p,index) => (
           <div key={index} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
              <div>
                  <h2 className='font-bold text-2xl'>{p.title}</h2>
                  <div>{p.description}</div>
              </div>

              <div className='flex gap-2 '>
                  <RemoveBtn />
                  <Link href={'/editProduct/123'}>
                      {/* <HiPencilAlt size={ 24} /> */}
                      Edit
                  </Link>
              </div>
     </div>
        ))
    }
         
    </>
  )
}

export default TopicsList
