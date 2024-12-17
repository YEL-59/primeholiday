import React from 'react'

const HotelsStep = () => {
    return (
        <>

            <div className="bg-green py-3 mb-3 flex justify-center items-center  space-x-10">

                <div className="font-semibold text-center  text-lg text-ivory-white uppercase">Hotels</div>



            </div>

            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-black">
                    <thead className="text-xl  font-medium text-green uppercase bg-transparent ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                4* Standard Hotel
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Room Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                4* Superior Hotel
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Room Type
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-lg'>
                        <tr className="odd:bg-[#FFE3BD] even:bg-[#FFF] ">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                Muscat
                            </th>
                            <td className="px-6 py-4">
                                Golden Tulip orsimilar
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                            <td className="px-6 py-4">
                                Radisson Blu or similar
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                        </tr>
                        <tr className="odd:bg-[#FFE3BD] even:bg-[#FFF]">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                Sur
                            </th>
                            <td className="px-6 py-4">
                                Turtle Beach Resort
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                            <td className="px-6 py-4">
                                Ras Al Jinz Resort Standard
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                        </tr>
                        <tr className="odd:bg-[#FFE3BD] even:bg-[#FFF]">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                Wahiba
                            </th>
                            <td className="px-6 py-4">
                                Sama Al Wasil Camp
                            </td>
                            <td className="px-6 py-4">
                                Chalet
                            </td>
                            <td className="px-6 py-4">
                                Desert Rose Camp
                            </td>
                            <td className="px-6 py-4">
                                Deluxe Tent
                            </td>
                        </tr> <tr className="odd:bg-[#FFE3BD] even:bg-[#FFF]">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                Nizwa
                            </th>
                            <td className="px-6 py-4">
                                Antique Inn or Similar
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                            <td className="px-6 py-4">
                                Antique Inn or similar
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                        </tr> <tr className="odd:bg-[#FFE3BD] even:bg-[#FFF]">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                Misfah
                            </th>
                            <td className="px-6 py-4">
                                Misfah Hospitality Inn
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                            <td className="px-6 py-4">
                                Misfah Hospitality Inn
                            </td>
                            <td className="px-6 py-4">
                                Standard
                            </td>
                        </tr> <tr className="odd:bg-[#FFE3BD] even:bg-[#FFF]">
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                            Wakan Village
                            </th>
                            <td className="px-6 py-4">
                            Wakan Guest House
                            </td>
                            <td className="px-6 py-4">
                            Standard
                            </td>
                            <td className="px-6 py-4">
                            Waken Guest House
                            </td>
                            <td className="px-6 py-4">
                            Standard
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>



        </>
    )
}

export default HotelsStep