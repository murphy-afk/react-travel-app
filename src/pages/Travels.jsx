import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardTravel from "../components/CardTravel.jsx";
import { useNavigate } from "react-router-dom";
import TravellersAccordion from "../components/TravellersAccordion.jsx";

function Travels({ trips, travelers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const trip = trips.find((trip) => trip.id === parseInt(id));

  const travelFiltered = travelers.filter(
    (traveler) => traveler.trip_id === trip.id,
  );

  return (
    <>
      <div className="container pt-4 ">
        <CardTravel trip={trip} showLink={false} />
        <h2 className="border rounded py-2 fw-bold text-center my-3">
          Travelers List:
        </h2>
        <TravellersAccordion travelers={travelFiltered} />
        <div className="text-center">
          <button
            className="btn btn-success mt-4 "
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
