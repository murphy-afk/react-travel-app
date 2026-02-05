import { useState } from "react";
import "./TravelerForm.css";

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
    
    const fixedName = formData.name.charAt(0).toUpperCase() + (formData.name.slice(1) === formData.name.slice(1).toUpperCase() ? formData.name.slice(1).toLowerCase() : formData.name.slice(1));
    
    const fixedSurname = formData.surname.charAt(0).toUpperCase() + (formData.surname.slice(1) === formData.surname.slice(1).toUpperCase() ? formData.surname.slice(1).toLowerCase() : formData.surname.slice(1));

    const fixedMail = formData.email.toLowerCase();

    const newTraveler = { ...formData, id: Date.now(), name: fixedName, surname: fixedSurname, email: fixedMail };
    
    setTravelers([...travelers, newTraveler]);
    setFormData(initialFormData);
  }

  return (
    <form className="row g-4 p-2" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label
          className="form-label small fw-black text-uppercase tracking-wider text-custom"
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
          className="form-label small fw-black text-uppercase tracking-wider text-custom"
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
          className="form-label small fw-black text-uppercase tracking-wider text-custom"
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
          className="form-label small fw-black text-uppercase tracking-wider text-custom"
        >
          <i className="bi bi-fingerprint me-2 text-danger"></i>Codice Fiscale
        </label>
        <input
          type="text"
          name="identification_code"
          className="form-control border-0 bg-light py-2 rounded-3 shadow-inner text-uppercase"
          value={formData.identification_code}
          onChange={handleChange}
          pattern="^[A-Za-z]{6}[0-9]{2}[A-Za-z][0-9]{2}[A-Za-z0-9]{5}$"
          placeholder="AAAAAA99A99A999A"
          required
        />
      </div>

      <div className="col-md-5">
        <label
          className="form-label small fw-black text-uppercase tracking-wider text-custom"
        >
          <i className="bi bi-phone me-2 text-success"></i>Numero di cellulare
        </label>
        <input
          type="tel"
          name="telephone_number"
          className="form-control border-0 bg-light py-2 rounded-3 shadow-inner"
          placeholder="+123456789012"
          pattern="^\+[0-9]{12}$"
          value={formData.telephone_number}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-12 mt-5">
        <button
          type="submit"
          className="btn border-0 w-100 py-3 rounded-pill fw-black text-white shadow-glow transition-all hover-scale submit-button"
        >
          <i className="bi bi-person-plus-fill me-2 fs-5"></i>
          AGGIUNGI ORA
        </button>
      </div>
    </form>
  );
}
