import React from 'react'
import img from "../../../../assets//DestinationImg/Itenary1.png"
const ItineraryStep = () => {
    return (
        <>
            <div className="bg-green py-3 mb-3 flex justify-center items-center  space-x-10">

                <div className="font-semibold text-center  text-lg text-ivory-white uppercase">Itinerary</div>



            </div>


            <div>
                <div className='container mx-auto border border-green  p-5 my-10'>
                    <div>
                        <div className='flex gap-5'>
                            <div>
                                <div className='flex justify-between font-medium'>
                                    <h1>Day 1</h1>
                                    <h1>Dinner</h1>

                                </div>
                                <p className='text-md font-normal max-w-6xl leading-10'>
                                    Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a ‘Muscat by Night’ tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the <span className='text-yellow-500'>... Read more</span>
                                </p>
                            </div>
                            <div>
                                <img src={img} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className='container mx-auto border border-green  p-5'>
                    <div>
                        <div className='flex gap-5'>
                            <div>
                                <div className='flex justify-between font-medium'>
                                    <h1>Day 1</h1>
                                    <h1>Dinner</h1>

                                </div>
                                <p className='text-md font-normal max-w-6xl leading-10'>
                                    Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a ‘Muscat by Night’ tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the <span className='text-yellow-500'>... Read more</span>
                                </p>
                            </div>
                            <div>
                                <img src={img} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ItineraryStep