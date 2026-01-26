import { Link } from "react-router";

function CardTravel({ trip, showLink = true }) {
  const { starting_point, ending_point, starting_date, ending_date, category } =
    trip;

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Starting From : {starting_point}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Starting date: {starting_date}
          </h6>

          <h5 className="card-title mt-4"> Destination : {ending_point}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Ending date: {ending_date}
          </h6>
          <p className="fs-5">
            <span
              className={`badge mt-2 fs-6 ${category === "wild" ? "text-bg-danger" : "text-bg-success"}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </p>
          {showLink === true ? (
            <Link className="btn btn-primary mt-2" to={`/travels/${trip.id}`}>
              Click Here for More Details
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default CardTravel;
