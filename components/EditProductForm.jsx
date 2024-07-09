import React from 'react'

const EditProductForm = () => {
  return (
   <form className='flex flex-col gap-4'>
      <input className='border text-slate-500 px-8 py-2' placeholder='Topic text...' type="text" />
      <input className='border text-slate-500 px-8 py-2' placeholder='Topic description...' type="text" />
      <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-lg'>
        Update Product
      </button>
   </form>
  )
}

export default EditProductForm