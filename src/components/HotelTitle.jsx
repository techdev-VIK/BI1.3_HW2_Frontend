import useFetch from "../useFetch";

const HotelTitle = ({titles}) => {

    const {data, loading, error} = useFetch(`https://bi-1-3-hw-2-backend.vercel.app/hotels/title/${titles}`);

    console.log(data);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error loading the data.</p>

    return (
        <>
        {data?(<div>
            <h2>{data.name}</h2>
            <p><strong>Location: </strong>{data.location}</p>
            <p><strong>Rating: </strong>{data.rating}</p>
            <p><strong>Price Range: </strong>{data.priceRange}</p>
        </div>): <p>No data found for the given title.</p>}
        </>
    )

}

export default HotelTitle;

