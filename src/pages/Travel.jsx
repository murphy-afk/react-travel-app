import {travelers, trips} from "../Data/data.js";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function Travel() {
    const {id} = useParams();
    const [filteredTravelers, setFilteredTravelers] = useState([]);
    const [searchbarValue, setSearchbarValue] = useState("");

    console.log(id);
    console.log(travelers);
    console.log(trips);

    useEffect(() => {
        const travelFiltered = travelers.filter((traveler) => {
            return traveler.trip_id === travel_id;
        });

        const searchbarFiltered = travelFiltered.filter((traveler) => {
            if(searchbarValue.trim() === "")
            {
                return true;
            }
            else
            {
                if()
            }
        })
    }, [searchbarValue]);

    return (
        <p>Travel coming soon!</p>
    )
}

export default Travel;