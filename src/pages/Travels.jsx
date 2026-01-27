import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import CardTravel from "../components/CardTravel.jsx";
import TravellersAccordion from "../components/TravellersAccordion.jsx";
import TravelerForm from "../components/TravelerForm.jsx";

function Travels({ trips, travelers, setTravelers }) {
  const { id } = useParams();
  const navigate = useNavigate();


 

  const [searchbarValue, setSearchbarValue] = useState("");

  const trip = trips.find((trip) => trip.id === Number(id));

  if (!trip) {
    return <p>Viaggio non trovato</p>;
  }

  // utenti filtrati per viaggio + searchbar
  const filteredUsers = travelers
    .filter((t) => t.trip_id === trip.id)
    .filter((traveler) => {
      const nameSurname = `${traveler.name} ${traveler.surname}`.toLowerCase();
      return nameSurname.includes(searchbarValue.toLowerCase());
    });


  /* if (!trip)
    return <div className="text-center py-5">Caricamento viaggio...</div>; */

  return (
    <div className="bg-light min-vh-100">
      <div className="container py-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-link text-decoration-none text-muted mb-3 p-0"
        >
          <i className="bi bi-arrow-left-circle-fill fs-4 align-middle me-2"></i>
          <span className="align-middle fw-medium">
             🔙 Torna alla lista viaggi
          </span>
        </button>

        <div className="row g-4">
          <div className="col-12 col-xl-4">
            <div className="sticky-top" style={{ top: "20px" }}>
              <CardTravel trip={trip} showLink={false} />
            </div>
          </div>

          <div className="col-12 col-xl-8">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
              <div className="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">Lista Passeggeri</h4>
                <span className="badge bg-primary rounded-pill">
                  {filteredUsers.length}
                </span>
              </div>

              <div className="card-body p-4">
                <div className="input-group mb-4 shadow-sm rounded-pill overflow-hidden border">
                  <span className="input-group-text bg-white border-0 ps-3">
                    <i className="bi bi-search text-muted"></i>
                  </span>
                  <input
                    className="form-control border-0 py-2"
                    type="search"
                    placeholder="Cerca per nome o cognome..."
                    value={searchbarValue}
                    onChange={(e) => setSearchbarValue(e.target.value)}
                  />
                </div>

                <TravellersAccordion travelers={filteredUsers} />
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4 text-primary">
                  Aggiungi un Turista
                </h5>
                <TravelerForm
                  id={id}
                  travelers={travelers}
                  setTravelers={setTravelers}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travels;
