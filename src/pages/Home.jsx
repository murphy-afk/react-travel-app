import CardTravel from "../components/CardTravel.jsx";

export default function Home({ trips }) {
  return (
    <div className="container pt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {trips.map((trip) => (
          <div className="col" key={trip.id}>
            <CardTravel trip={trip} showLink={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
