import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './userform.css';

const Userform = () => {
  let navigate = useNavigate();
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleCheck = () => {
    (JSON.parse(localStorage.getItem("name")) === "umair") ? successsignin()  : alert('user does not exist');
  };

  const successsignin = () => {
    alert(`welcome ${name}`);
    navigate("/", { replace: true });
  }

  return (
    <div className="row">
      <div className="text-center form-margin">
        <h4>Username </h4>
        <form>
          <input className="form-border"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            aria-label="fullname"
          />
          <div className="m-3">
            <input className="btn text-color" onClick={handleCheck} type="submit" value="Submit"></input>
          </div>

        </form>
      {/* {console.log("user", name)} */}
      </div>
    </div>
  );
};

export default Userform;
