import { useState } from "react";

export default function TravelerForm({ id, travelers, setTravelers }) {
  const initialFormData = {
    name: "",
    surname: "",
    email: "",
    identification_code: "",
    telephone_number: "",
    trip_id: parseInt(id),
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTraveler = { ...formData, id: Date.now() };
    setTravelers([...travelers, newTraveler]);
    setFormData(initialFormData);
  }

  return (
    <form className="row g-4 p-2" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label
          className="form-label small fw-black text-uppercase tracking-wider"
          style={{ color: "#475569" }}
        >
          <i className="bi bi-person me-2 text-primary"></i>Nome
        </label>
        <input
          type="text"
          name="name"
          className="form-control border-0 bg-light py-2 rounded-3 shadow-inner"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Mario"
        />
      </div>

      <div className="col-md-6">
        <label
          className="form-label small fw-black text-uppercase tracking-wider"
          style={{ color: "#475569" }}
        >
          Cognome
        </label>
        <input
          type="text"
          name="surname"
          className="form-control border-0 bg-light py-2 rounded-3 shadow-inner"
          value={formData.surname}
          onChange={handleChange}
          required
          placeholder="Rossi"
        />
      </div>

      <div className="col-12">
        <label
          className="form-label small fw-black text-uppercase tracking-wider"
          style={{ color: "#475569" }}
        >
          <i className="bi bi-envelope-at me-2 text-indigo"></i>Email Ufficiale
        </label>
        <div className="input-group">
          <span className="input-group-text border-0 bg-light text-muted">
            @
          </span>
          <input
            type="email"
            name="email"
            className="form-control border-0 bg-light py-2 rounded-end-3 shadow-inner"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="mario.rossi@travel.com"
          />
        </div>
      </div>

      <div className="col-md-7">
        <label
          className="form-label small fw-black text-uppercase tracking-wider"
          style={{ color: "#475569" }}
        >
          <i className="bi bi-fingerprint me-2 text-danger"></i>Codice Fiscale
        </label>
        <input
          type="text"
          name="identification_code"
          className="form-control border-0 bg-light py-2 rounded-3 shadow-inner"
          value={formData.identification_code}
          onChange={handleChange}
          required
          style={{ textTransform: "uppercase" }}
        />
      </div>

      <div className="col-md-5">
        <label
          className="form-label small fw-black text-uppercase tracking-wider"
          style={{ color: "#475569" }}
        >
          <i className="bi bi-phone me-2 text-success"></i>Recapito
        </label>
        <input
          type="tel"
          name="telephone_number"
          className="form-control border-0 bg-light py-2 rounded-3 shadow-inner"
          placeholder="333 000 0000"
          value={formData.telephone_number}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-12 mt-5">
        <button
          type="submit"
          className="btn border-0 w-100 py-3 rounded-pill fw-black text-white shadow-glow transition-all hover-scale"
          style={{
            background: "linear-gradient(45deg, #6366f1, #a855f7, #ec4899)",
            letterSpacing: "2px",
          }}
        >
          <i className="bi bi-person-plus-fill me-2 fs-5"></i>
          AGGIUNGI ORA
        </button>
      </div>
    </form>
  );
}
