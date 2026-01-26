import travelers_trips from "../Data/data.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Travels() {
    const { travelers, trips } = travelers_trips;
    const { id } = useParams();
    const [filteredTravelers, setFilteredTravelers] = useState([]);
    const [searchbarValue, setSearchbarValue] = useState("");

    console.log(id);
    console.log(travelers);
    console.log(trips);

    useEffect(() => {
        const travelFiltered = travelers.filter((traveler) => {
            return traveler.trip_id === id;
        });

        const searchbarFiltered = travelFiltered.filter((traveler) => {
            if (searchbarValue.trim() === "")
                return true;
            if (traveler.name.includes(searchbarValue.trim()))
                return true;
            return false;;
        });

        setFilteredTravelers(searchbarFiltered);
    }, [searchbarValue]);

    return (
        <p>Travel coming soon!</p>

        {
            
        }
    )
}

export default Travels;