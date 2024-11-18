import useFetch from "../useFetch";

import { useState } from "react";


const Hotels = () => {
    const [successMessage, setSuccessMessage] = useState('');


    const {data, loading, error} = useFetch(`https://bi-1-3-hw-2-backend.vercel.app/hotels`)

    // console.log(data);

    // if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading the data, please try again!</p>

    const handleDelete = async (hotelId) => {
        try {
            const response = await fetch(`https://bi-1-3-hw-2-backend.vercel.app/hotels/deleteHotel/${hotelId}`, {
                method: "DELETE"
            },
        )
        if(!response.ok){
            throw "Failed to delete hotel."
        }

        const data = await response.json();

        if(data){
            setSuccessMessage('Hotel deleted successfully.')
            window.location.reload()
        }

        }catch (error) {
            console.log(error)
        }
    }

    return (
        data? (<div>
            <h2>All Hotels</h2>
                <ul>
                    {data?.map((hotel) => (
                     <li key={hotel._id}>
                        {hotel.name}{"  "}
                        <button onClick={() => handleDelete(hotel._id)}>Delete</button>
                     </li>
                    ))}
                </ul>
                <p>{successMessage}</p>
            </div>) : loading && <p>Loading...</p>
        
    )
}

export default Hotels;
