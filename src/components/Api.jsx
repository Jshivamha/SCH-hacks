import React from 'react'

const Api = () => {
    return (
        <div className='flex h-[85vh]'>
            <div className='w-[25%] bg-black flex flex-col '>
                <div className='h-[20%] flex flex-col justify-center items-center border-b-1 border-slate-500 m-2 '>
                    <h1 className='text-xl font-bold text-green-400'>HELLO WORLD</h1>
                    <p className='font-semibold text-white'>The real Magic Start Here!</p>
                </div>
                <div className='h-[80%] flex flex-col items-center gap-5 pt-10'>
                    <div className='text-xl font-bold text-white'>
                        Select Requirment
                    </div>
                    <div>
                        <div className='flex flex-col w-60 h-20 gap-1 '>
                            <label htmlFor="Product" className='text-white'>Product Catagory</label>
                            <select name="Product" id="Product" className='h-12 rounded-md p-2 bg-transparent  text-white border-2'>
                                <option className='bg-black'  value="select">please Select</option>
                                <option className='bg-black' value="Mobile">Mobile</option>
                                <option className='bg-black' value="Laptop">Laptop</option>
                                <option className='bg-black' value="Desktop">Desktop</option>
                                <option className='bg-black' value="Accessories">Accessories</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-60 h-20 gap-1 mt-5'>
                            <label htmlFor="sub" className='text-white'>Product Sub-Catagory</label>
                            <select name="sub" id="sub" className='h-12 rounded-md p-2 bg-transparent text-white border-2'>
                                <option className='bg-black' value="select">please Select</option>
                                <option className='bg-black' value="Mobile">Mobile</option>
                                <option className='bg-black' value="Laptop">Laptop</option>
                                <option className='bg-black' value="Desktop">Desktop</option>
                                <option className='bg-black' value="Accessories">Accessories</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-60 h-20 gap-1 mt-5'>
                            <label htmlFor="marketplace" className='text-white'>Marketplce</label>
                            <select name="Brand" id="Brand" className='h-12 rounded-md p-2 bg-transparent text-white border-2'>
                                <option className='bg-black' value="select">please Select</option>
                                <option className='bg-black' value="Mobile">Mobile</option>
                                <option className='bg-black' value="Laptop">Laptop</option>
                                <option className='bg-black' value="Desktop">Desktop</option>
                                <option className='bg-black' value="Accessories">Accessories</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[75%] bg-white'>
                <div>
                    <input type="file" placeholder='DRAG AND DROP' />
                </div>
            </div>
        </div>
    )
}

export default Api