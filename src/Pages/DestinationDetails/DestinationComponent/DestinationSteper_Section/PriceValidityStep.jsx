



import React, { useState } from 'react'

const PriceValidityStep = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <>

            <div className="bg-green py-3 mb-3 flex flex-col space-y-5">
                <h1 className="text-xl font-medium text-ivory-white text-center">
                    Package Cost Per Person Sharing Twin/Double Occupancy in USD
                </h1>

                <div className="flex gap-5 justify-around w-full">
                    <div className="font-semibold text-lg text-ivory-white uppercase">
                        Validity 01 Oct 2024 - 30 Apr 2025
                    </div>
                    <div className="font-semibold text-lg text-red-500 uppercase">
                        Not valid between 23 Dec 2024 – 04 Jan 2025
                    </div>
                </div>
            </div>


            <div className="relative overflow-x-auto mt-5 bg-ivory-white">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-lg font-medium text-green uppercase bg-transparent ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Hotel Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                2 Pax
                            </th>
                            <th scope="col" className="px-6 py-3">
                                4 Pax
                            </th>
                            <th scope="col" className="px-6 py-3">
                                6 Pax
                            </th>
                            <th scope="col" className="px-6 py-3">
                                8 Pax
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Single Supplement
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="bg-transparent">
                            <th scope="row" className="px-3 py-2 font-medium text-black whitespace-nowrap ">
                                <div>
                                    <div className="flex items-center mt-2.5 mb-5 ">
                                        <div className='bg-[#F0F8F3] rounded p-2 flex px-10'>
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse ">
                                                <span className="flex items-center ms-3"><input type="checkbox" name="" id="" /></span>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                            <span className=" text-md font-semibold px-2.5 py-0.5  ">- Standard</span>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border-[2px] border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                        </tr>



                        
                        <tr className="bg-transparent">
                            <th scope="row" className="px-3  font-medium text-black whitespace-nowrap ">
                                <div>
                                    <div className="flex items-center mt-2.5 mb-5 ">
                                        <div className='bg-[#F0F8F3] rounded p-2 flex px-10'>
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse ">
                                                <span className="flex items-center ms-3"><input type="checkbox" name="" id="" /></span>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                            <span className=" text-md font-semibold px-2.5 py-0.5  ">- Superior</span>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className={`px-10 py-2 rounded font-medium border-[2px] border-green ${isActive
                                        ? "bg-green text-white"
                                        : "bg-white text-green border-2 border-green hover:bg-green hover:text-white"
                                        }`}
                                >
                                    $2525
                                </button>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>



        </>
    )
}

export default PriceValidityStep