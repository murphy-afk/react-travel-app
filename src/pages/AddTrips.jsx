import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTrips({ onAddTrip }) {
  const [success, SetSuccess] = useState(false);
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
    SetSuccess(true);
    setTimeout(() => {
      SetSuccess(false);
      navigate("/");
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
    <div className="container mt-5">
      {success === false ? (
        <h2 className="mb-4">Aggiungi nuovo Viaggio</h2>
      ) : (
        <div className="alert alert-success shadow-sm" role="alert">
          <h1 className="alert-heading h4">✨ Viaggio Creato con Successo!</h1>
          <p className="mb-0">
            Il tuo nuovo itinerario è ora disponibile nella Home.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="partenza" className="form-label">
            Partenza
          </label>
          <input
            id="partenza"
            type="text"
            name="starting_point"
            className="form-control"
            placeholder="Es: Milano"
            value={form.starting_point}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="destinazione" className="form-label">
            Destinazione
          </label>
          <input
            id="destinazione"
            type="text"
            name="ending_point"
            className="form-control"
            placeholder="Es: Parigi"
            value={form.ending_point}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="data-inizio" className="form-label">
              Data Inizio
            </label>
            <input
              id="data-inizio"
              type="date"
              name="starting_date"
              className="form-control"
              value={form.starting_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="data-fine" className="form-label">
              Data Fine
            </label>
            <input
              id="data-fine"
              type="date"
              name="ending_date"
              className="form-control"
              value={form.ending_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="tipologia-viaggio" className="form-label">
            Tipologia Viaggio
          </label>
          <select
            id="tipologia-viaggio"
            name="category"
            className="form-select"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Seleziona categoria</option>
            <option value="soft">Soft</option>
            <option value="wild">Wild</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-50">
            Salva Viaggio
          </button>
        </div>
      </form>
    </div>
  );
}
