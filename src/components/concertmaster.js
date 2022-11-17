import React from 'react'
import { AxiosCalls } from './functions/AxiosCalls'
import { useEffect, useState } from 'react'



const Concertmaster = () => {

    const [concert, Setconcert] = useState([])

    useEffect(() => {

        AxiosCalls(Setconcert)

    }, [])


    return (
        <>

            {concert.map((info) => (

                <div key={info.id} class="  gap-5 px-6 py-6 ">
                    <div class=" shrink-0 snap-center w-full flex flex-col     md:flex-row  rounded-lg hover:shadow-xl shadow-md shadow-gray-500/50 transition duration-300 ease-out hover:ease-in bg-white">
                        <img class=" w-44 md:h-auto  object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                            src={info.image} alt="" />
                        <div class="p-6 flex flex-col justify-start">
                            <p className="text-gray-900 text-sm md:text-xl font-medium mb-2" >{info.name}</p>
                            <h3 class="text-gray-700 text-xs  md:text-sm mb-4"> {info.description} </h3>
                            <p class="text-gray-600 text-xs">{info.quantity}</p>

                        </div>

                    </div>

                </div>

            ),)}
        </>
        )
}

export default Concertmaster