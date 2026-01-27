import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTrips({ onAddTrip }) {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    starting_point: "",
    ending_point: "",
    starting_date: "",
    ending_date: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = { ...form, id: Date.now() };

    onAddTrip(newTrip);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      navigate("/trips");
    }, 3000);

    setForm({
      starting_point: "",
      ending_point: "",
      starting_date: "",
      ending_date: "",
      category: "",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-7">
          <div className="text-center mb-5">
            <div className="display-4 text-primary mb-2">
              <i className="bi bi-airplane-engines-fill"></i>
            </div>
            <h2 className="fw-bold">Pianifica Nuova Avventura</h2>
            <p className="text-muted">
              Inserisci i dettagli per iniziare il tuo prossimo viaggio.
            </p>
          </div>

          {success && (
            <div
              className="alert alert-success border-0 shadow-sm rounded-4 mb-4 d-flex align-items-center animate__animated animate__fadeIn"
              role="alert"
            >
              <i className="bi bi-check-circle-fill fs-4 me-3"></i>
              <div>
                <strong className="d-block">Viaggio salvato!</strong>
                <span>Ti stiamo riportando in Esplorazione...</span>
              </div>
            </div>
          )}

          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-geo-alt text-primary me-2"></i>Punto
                      di Partenza
                    </label>
                    <input
                      name="starting_point"
                      type="text"
                      className="form-control form-control-lg rounded-3 bg-light border-0"
                      placeholder="Da dove parti?"
                      value={form.starting_point}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-geo-fill text-danger me-2"></i>
                      Destinazione
                    </label>
                    <input
                      name="ending_point"
                      type="text"
                      className="form-control form-control-lg rounded-3 bg-light border-0"
                      placeholder="Dove vuoi andare?"
                      value={form.ending_point}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-calendar-event text-secondary me-2"></i>
                      Inizio Viaggio
                    </label>
                    <input
                      name="starting_date"
                      type="date"
                      className="form-control form-control-lg rounded-3 bg-light border-0"
                      value={form.starting_date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-calendar-check text-secondary me-2"></i>
                      Fine Viaggio
                    </label>
                    <input
                      name="ending_date"
                      type="date"
                      className="form-control form-control-lg rounded-3 bg-light border-0"
                      value={form.ending_date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-tags text-secondary me-2"></i>Stile di
                    Viaggio
                  </label>
                  <div className="d-flex gap-3 mt-1">
                    {["soft", "wild"].map((cat) => (
                      <div key={cat} className="flex-grow-1">
                        <input
                          type="radio"
                          className="btn-check"
                          name="category"
                          id={cat}
                          value={cat}
                          checked={form.category === cat}
                          onChange={handleChange}
                          required
                        />
                        <label
                          className={`btn btn-outline-${cat === "wild" ? "danger" : "success"} w-100 py-3 rounded-3 text-capitalize fw-bold`}
                          htmlFor={cat}
                        >
                          <i
                            className={`bi bi-${cat === "wild" ? "fire" : "tree"} me-2`}
                          ></i>
                          {cat}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-pill py-3 fw-bold shadow"
                >
                  <i className="bi bi-cloud-arrow-up-fill me-2"></i>Crea
                  Itinerario
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-link text-muted text-decoration-none small"
              onClick={() => navigate("/")}
            >
              Annulla e torna indietro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
