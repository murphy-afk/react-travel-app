import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardTravel from "../components/CardTravel.jsx";
import { useNavigate } from "react-router-dom";
import TravellersAccordion from "../components/TravellersAccordion.jsx";
import TravelerForm from "../components/TravelerForm.jsx";

function Travels({ trips, travelers, setTravelers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  /*
  1. Aggiungiamo il form
  */

  const trip = trips.find((trip) => trip.id === parseInt(id));
  
  const travelersFiltered = travelers.filter(
    (traveler) => traveler.trip_id === trip.id,
  );

  const [filteredUsers, setFilteredUsers] = useState(travelersFiltered);
  const [searchbarValue, setSearchbarValue] = useState("");

  useEffect(() => {
    const searchbarFiltered = travelersFiltered.filter((traveler) => {

      if(searchbarValue.trim() === "") return true;

      const nameSurname = traveler.name + " " + traveler.surname;

      if(nameSurname.toLowerCase().includes(searchbarValue.toLowerCase())) return true;
      return false;
    });

    setFilteredUsers(searchbarFiltered);
  }, [searchbarValue, travelers]);

  return (
    <>
      <div className="container pt-4 ">
        <CardTravel trip={trip} showLink={false} />

        <h2 className="border rounded py-2 fw-bold text-center my-3">
          Travelers List
        </h2>
        <input className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        value={searchbarValue}
        onChange={(event) => setSearchbarValue(event.target.value)}
        />
        <TravellersAccordion travelers={filteredUsers} />
        <TravelerForm id={id} travelers={travelers} setTravelers={setTravelers}/>
        {/* Posizione nuovo utente */}

        <div className="text-center">
          <button
            className="btn btn-warning mt-4 "
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back to the Trips area
          </button>
        </div>
      </div>
    </>
  );
}

export default Travels;
