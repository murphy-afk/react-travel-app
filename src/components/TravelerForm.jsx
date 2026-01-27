import {useState, useEffect} from "react";

export default function TravelerForm ({id, travelers, setTravelers}) {
let lastId = travelers[travelers.length - 1].id;
  
  const initialFormData = {
    //id: ++lastId,
    name: "",
    surname: "",
    email: "",
    identification_code: "",
    telephone_number: "",
    trip_id: parseInt(id)

  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange (event) {
    const {name, value} = event.target;
    
    setFormData((data) => ({
      ...data, 
      [name]: value,
    }));
  }

  function handleSubmit (event) {
    event.preventDefault();

    const newTraveler = {
      ...formData,
      id : Date.now(),
      trip_id: parseInt(id)
    }

    setTravelers([...travelers, newTraveler]);
    console.log(travelers);
    
    setFormData(initialFormData);
  }


  return (


    <>
      <form className="mt-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">Name</label>
        <input 
        type="text" 
        name="name" 
        id="name" 
        className="form-control"
        value={formData.name}
        onChange={handleChange}
        />

        <label htmlFor="surname" className="form-label">Surname</label>
        <input
        type="text"
        name="surname"
        id="surname"
        className="form-control"
        value={formData.surname}
        onChange={handleChange}
        />

        <label htmlFor="email" className="form-label">Email</label>
        <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        value={formData.email}
        onChange={handleChange}
        />

        <label htmlFor="identification_code" className="form-label">Identification code (CF)</label>
        <input
        type="text"
        name="identification_code"
        id="identification_code"
        className="form-control"
        value={formData.identification_code}
        onChange={handleChange}
        />

        <label htmlFor="telephone_number" className="form-label">Telephone number</label>
        <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name="telephone_number"
        id="telephone_number"
        className="form-control"
        value={formData.telephone_number}
        onChange={handleChange}
        />

        <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-success mt-3" >Submit</button>
        </div>
      </form>
    </>
  )
}