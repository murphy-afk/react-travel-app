import { Link } from "react-router-dom";

function CardTravel({ trip, showLink }) {
  const { starting_point, ending_point, starting_date, ending_date, category } =
    trip;

  const isWild = category === "wild";
  const gradient = isWild
    ? "linear-gradient(135deg, #f97316 0%, #ec4899 100%)"
    : "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)";

  const glowColor = isWild
    ? "rgba(236, 72, 153, 0.3)"
    : "rgba(99, 102, 241, 0.3)";

  return (
    <div
      className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden bg-white transition-all"
      style={{
        boxShadow: `0 10px 30px ${glowColor}`,
        borderBottom: `4px solid ${isWild ? "#ec4899" : "#6366f1"}`,
      }}
    >
      <div className="card-body p-4">
        <div className="mb-4">
          <span
            className="badge rounded-pill px-3 py-2 fw-bold text-uppercase shadow-sm"
            style={{ background: gradient, letterSpacing: "1px" }}
          >
            {category}
          </span>
        </div>

        <div className="mb-4">
          <h2
            className="fw-black mb-1"
            style={{
              color: "#0f172a",
              fontWeight: "900",
              letterSpacing: "-1px",
            }}
          >
            {ending_point}
          </h2>
          <div className="d-flex align-items-center text-secondary small">
            <i className="bi bi-calendar3-range me-2 text-primary"></i>
            <span className="fw-medium">
              {starting_date} — {ending_date}
            </span>
          </div>
        </div>

        <div
          className="p-3 rounded-4 mb-4 d-flex align-items-center"
          style={{
            background: "linear-gradient(to right, #f8fafc, #f1f5f9)",
            border: "1px solid #e2e8f0",
          }}
        >
          <div
            className="rounded-circle bg-white shadow-sm p-2 me-3 d-flex align-items-center justify-content-center"
            style={{ width: "45px", height: "45px" }}
          >
            <i
              className="bi bi-geo-alt-fill fs-5"
              style={{ color: isWild ? "#f97316" : "#6366f1" }}
            ></i>
          </div>
          <div>
            <label
              className="d-block text-muted fw-bold text-uppercase"
              style={{ fontSize: "0.6rem", letterSpacing: "1px" }}
            >
              Partenza da
            </label>
            <span className="fw-bold text-dark">{starting_point}</span>
          </div>
        </div>

        {showLink && (
          <Link
            className="btn w-100 py-3 rounded-pill fw-bold text-white border-0 shadow-sm d-flex justify-content-center align-items-center transition-all hover-scale"
            style={{ background: gradient }}
            to={`/travels/${trip.id}`}
          >
            VEDI DETTAGLI
            <i className="bi bi-arrow-right-short ms-2 fs-4"></i>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CardTravel;
