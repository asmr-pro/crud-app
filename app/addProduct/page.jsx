'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function page() {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
 const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert("Input Required")
      return
    }

    try {
     const res =  await fetch('http://localhost:3000/api/products', {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify({title,description})
      })
      if (res.ok) {
        router.push('/')
        
      } else {
        throw new Error("Faild to create...")
        }
    } catch (error) {
      console.log("Not created")
    }


  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input onChange={
        (e)=> setTitle(e.target.value)
      }
      value={title}
        className='border text-slate-500 px-8 py-2' placeholder='Topic text...' type="text" />
      <input
      onChange={(e)=>setDescription(e.target.value)}
        value={description}
        className='border text-slate-500 px-8 py-2' placeholder='Topic description...' type="text" />
      <button type="submit" className='bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-lg'>
        Add Product
      </button>
   </form>
  )
}
