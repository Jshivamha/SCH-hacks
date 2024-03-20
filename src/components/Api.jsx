import React, { useState, useRef, useEffect } from 'react';

const Api = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [photodata, setPhotodata] = useState(null);
    const [title, settitle] = useState("");
    const [para, setpara] = useState("");
    const galleryInputRef = useRef(null); // Create a ref for the input element

    const openGallery = () => {
        galleryInputRef.current.click(); // Access the click function of the input element through the ref
    };

    useEffect(() => {
        if (photodata) {
            detectObjects(photodata);
        }
    }, [photodata]);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPhotodata(file);
        }
    };

    function formatKeywords(keywords) {
        // Format keywords as needed
        return keywords.join(', '); // Join keywords into a comma-separated string
    }

    const ChatGPTAPI = async (keyword) => {
        const url = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '916531ba40msh7bc4bdfc846058cp191e1cjsn66d202ebf942',
                'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
            },
            body: JSON.stringify({
                messages: [
                    {
                        content: `${keyword} - provide me with an appropriate title and short paragraph [30 words max] for the product to sell it.`,
                        role: 'user'
                    }
                ],
                system_prompt: '',
                temperature: 0.9,
                top_k: 5,
                top_p: 0.9,
                max_tokens: 256,
                web_access: false,
            }),
        };
    
        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse JSON response
            console.log(result);
            const title = result.result.split('\n\n')[0].split(':')[1].trim();
            const paragraph = result.result.split('\n\n')[1];
            settitle(title);
            setpara(paragraph);
            console.log(title);
            console.log(para);
        } catch (error) {
            console.error(error);
        }
    }
    

    const detectObjects = async (file) => {
        const url = 'https://objects-detection.p.rapidapi.com/objects-detection';
        const data = new FormData();
        data.append('image', file);

        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': '916531ba40msh7bc4bdfc846058cp191e1cjsn66d202ebf942',
                'X-RapidAPI-Host': 'objects-detection.p.rapidapi.com'
            },
            body: data
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse response as JSON
            console.log(result.body.keywords);
            const keywords = result.body.keywords;
            const keyword = formatKeywords(keywords); // No need for await here
            console.log(keyword);
            ChatGPTAPI(keyword);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='flex h-[85vh]'>
            <div className='w-[25%] flex flex-col '>
                <div className='h-[20%] flex flex-col justify-center items-center border-b-1 border-slate-500 m-2 '>
                    <h1 className='text-xl font-bold text-green-400'>HELLO WORLD</h1>
                    <p className='font-semibold text-black'>The real Magic Start Here!</p>
                </div>
                <div className='h-[80%] flex flex-col items-center gap-5 pt-10'>
                    <div className='text-xl font-bold text-black'>
                        Select Requirment
                    </div>
                    <div>
                        <div className='flex flex-col w-60 h-20 gap-1 '>
                            <label htmlFor="Product" className='text-black'>Product Catagory</label>
                            <select name="Product" id="Product" className='h-12 rounded-md p-2 bg-transparent  text-black border-2'>
                                <option className='bg-white'  value="select">please Select</option>
                                <option className='bg-white' value="Mobile">Clothing</option>
                                <option className='bg-white' value="Laptop">Footwear</option>
                                <option className='bg-white' value="Desktop">Electronics</option>
                                <option className='bg-white' value="Accessories">Accessories</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-60 h-20 gap-1 mt-5'>
                            <label htmlFor="sub" className='text-black'>Product Sub-Catagory</label>
                            <select name="sub" id="sub" className='h-12 rounded-md p-2 bg-transparent text-black border-2'>
                                <option className='bg-white' value="select">please Select</option>
                                <option className='bg-white' value="Mobile">T Shirt</option>
                                <option className='bg-white' value="Laptop">Pants</option>
                                <option className='bg-white' value="Desktop">Jacket</option>
                                <option className='bg-white' value="Accessories">Hoodie</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-60 h-20 gap-1 mt-5'>
                            <label htmlFor="marketplace" className='text-black'>Marketplace</label>
                            <select name="Brand" id="Brand" className='h-12 rounded-md p-2 bg-transparent text-black border-2'>
                                <option className='bg-white' value="select">please Select</option>
                                <option className='bg-white' value="Mobile">Amazon</option>
                                <option className='bg-white' value="Laptop">Flipkart</option>
                                <option className='bg-white' value="Desktop">Shoplues</option>
                                <option className='bg-white' value="Accessories">Ebay</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-60 h-20 gap-1 mt-5'>
                            <label htmlFor="marketplace" className='text-black'>Material type</label>
                            <select name="Brand" id="Brand" className='h-12 rounded-md p-2 bg-transparent text-black border-2'>
                                <option className='bg-white' value="select">please Select</option>
                                <option className='bg-white' value="Mobile">Wool</option>
                                <option className='bg-white' value="Laptop">Polyester</option>
                                <option className='bg-white' value="Desktop"></option>
                            </select>
                        </div>
                        <div className='flex flex-col w-60 h-20 gap-1 mt-5'>
                            <label htmlFor="marketplace" className='text-black'>Occasion</label>
                            <select name="Brand" id="Brand" className='h-12 rounded-md p-2 bg-transparent text-black border-2'>
                                <option className='bg-white' value="select">please Select</option>
                                <option className='bg-white' value="Mobile">Party</option>
                                <option className='bg-white' value="Laptop">Casual</option>
                                <option className='bg-white' value="Desktop">Sports</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center h-screen">
                <div className="grid grid-cols-2 gap-8">
                    <div className="w-80 h-80 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer">
                        <input 
                            type="file" 
                            id="galleryInput" 
                            style={{ display: 'none' }} 
                            onChange={handleFileSelect} 
                            ref={galleryInputRef} // Assign the ref to the input element
                        />
                        <p className="text-gray-600">Drag & Drop Image Here</p>
                        <button onClick={openGallery} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Or Open Gallery</button>
                    </div>
                    <div className="border border-gray-400 p-4 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Data - </h2>
                        <h2 className="text-base font-semibold mb-2">{title}</h2>
                        <h2 className="text-base font-semibold mb-2">{para}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Api