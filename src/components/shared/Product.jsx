import React from 'react'

const Product = ({productName = 'Product Name', selectedQuantity = 0, quantity = 0}) => {
  return (
    <div className='flex flex-col w-32 bg-gray-700'>
        <div className='h-32 bg-white p-2'>
            <div className='w-full h-full rounded-full bg-blue-600'>

            </div>
        </div>
        <div className='h-8 flex items-center px-2'>
            <p className='truncate'>{productName}</p>
        </div>
        <div className='h-8 flex flex-row justify-between items-center w-full'>
            <button className='w-1/4 bg-gray-600 hover:bg-gray-500 font-bold h-full'>-</button>
            <div className='w-2/4 h-full flex items-center justify-center'>
                {selectedQuantity + '/' + quantity}
            </div>
            <button className='w-1/4 bg-gray-600 hover:bg-gray-500 font-bold h-full'>+</button>
        </div>
    </div>
  )
}

export default Product