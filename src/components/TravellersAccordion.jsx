export default function TravellersAccordion({ travelers }) {
  return (
    <div className="accordion" id="travelersAccordion">
      {travelers.map((traveler) => {
        const collapseId = `collapse-${traveler.id}`;

        return (
          <div className="accordion-item" key={traveler.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
              >
                {`${traveler.name} ${traveler.surname}`}
              </button>
            </h2>
            <div
              id={collapseId}
              className="accordion-collapse collapse "
              data-bs-parent="travelersAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>{traveler.email}</li>
                  <li>{traveler.telephone_number}</li>
                  <li>{traveler.identification_code}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
