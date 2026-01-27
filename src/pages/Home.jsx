import ImageHome from "../assets/ImageHome.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="home-background d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", position: "relative" }}
      >
        <div className="text-center overlay p-4">
          <h1
            className="display-1 fw-black tracking-tighter shadow-text"
            style={{
              background:
                "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize:
                "clamp(3rem, 10vw, 8rem)",
              lineHeight: "1",
            }}
          >
            BOOROAD
          </h1>
          <p className="text-white fw-bold text-uppercase mt-2 tracking-widest opacity-75">
            Viaggia con noi
          </p>
          <div className="d-flex justify-content-center align-items-center">

          <Link
            className="nav-link fw-bold text-light opacity-75 hover-opacity-100 transition-all border rounded w-75"
            style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
            to="/trips"
          >
            ESPLORA I NOSTRI VIAGGI
          </Link>
          </div>
        </div>
      </div>
      {/*  <div className="home-background d-flex justify-content-center align-items-center">
     
          <h1 className="fw-bold">BOO ROAD</h1>
      
    </div> */}
    </>
  );
}

export default Home;
