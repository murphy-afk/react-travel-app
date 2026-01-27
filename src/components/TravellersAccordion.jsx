export default function TravellersAccordion({ travelers }) {
  return (
    <div className="accordion accordion-flush" id="travelersAccordion">
      {travelers.map((traveler) => {
        const collapseId = `collapse-${traveler.id}`;

        return (
          <div
            className="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden"
            key={traveler.id}
            style={{ transition: "transform 0.3s ease" }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-black py-3 text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                style={{ fontSize: "1.1rem" }}
              >
                <div
                  className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <i className="bi bi-person-fill text-white fs-5"></i>
                </div>
                {`${traveler.name} ${traveler.surname}`}
              </button>
            </h2>

            <div
              id={collapseId}
              className="accordion-collapse collapse"
              data-bs-parent="#travelersAccordion"
            >
              <div
                className="accordion-body border-top border-light"
                style={{ backgroundColor: "#fcfaff" }}
              >
                <div className="row g-3">
                  {/* Email */}
                  <div className="col-12 col-md-4">
                    <div className="d-flex align-items-center p-2 rounded-3 hover-bg-white transition-all">
                      <i className="bi bi-envelope-at-fill me-3 fs-4 text-indigo"></i>
                      <div>
                        <small
                          className="text-muted d-block text-uppercase fw-bold"
                          style={{ fontSize: "0.65rem" }}
                        >
                          Email
                        </small>
                        <span className="fw-semibold text-dark">
                          {traveler.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Telefono */}
                  <div className="col-12 col-md-4">
                    <div className="d-flex align-items-center p-2 rounded-3 hover-bg-white transition-all">
                      <i className="bi bi-telephone-plus-fill me-3 fs-4 text-success"></i>
                      <div>
                        <small
                          className="text-muted d-block text-uppercase fw-bold"
                          style={{ fontSize: "0.65rem" }}
                        >
                          Telefono
                        </small>
                        <span className="fw-semibold text-dark">
                          {traveler.telephone_number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Codice Fiscale */}
                  <div className="col-12 col-md-4">
                    <div className="d-flex align-items-center p-2 rounded-3 hover-bg-white transition-all">
                      <i className="bi bi-person-vcard-fill me-3 fs-4 text-danger"></i>
                      <div>
                        <small
                          className="text-muted d-block text-uppercase fw-bold"
                          style={{ fontSize: "0.65rem" }}
                        >
                          Codice Fiscale
                        </small>
                        <span className="fw-semibold text-dark text-uppercase">
                          {traveler.identification_code}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
