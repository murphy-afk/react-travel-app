import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="container py-5 text-center">
      <h1>404...</h1>
      <h2>
        Pagina non trovata, verrai reindirizzato in Home tra 5 secondi,
        attendi....
      </h2>
    </div>
  );
}

export default NotFound;
