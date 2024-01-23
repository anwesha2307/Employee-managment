import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import empservice from "../Service/empservice";

function EditEmp() {
  const [emp, setEmp] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    salary: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmp({ ...emp, [e.target.name]: value });
  };
  const [msg, setMsg] = useState("");
  const data = useParams();
  useEffect(() => {
    empservice
      .getById(data.id)
      .then((res) => {
        setEmp(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();
  const updateEmp = (e) => {
    e.preventDefault();
    empservice.updateEmployee(emp.id, emp).then((res) => {
      setMsg("Employee has been eddited successfully!");
      navigate("/");
    });
  };
  const reset = (e) => {
    e.preventDefault();
    setEmp({ fname: "", lname: "", email: "", address: "", salary: "" });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center fs-3 fw-bold">
                Edit Employee id={data.id}
                {msg && <p className="text-success">{msg}</p>}
              </div>
              <div className="card-body">
                <form onSubmit={(e) => updateEmp(e)}>
                  <div className="mb-3">
                    <label>Enter First name-</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      value={emp.fname}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Last name-</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      value={emp.lname}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Email-</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={emp.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={emp.address}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Salary-</label>
                    <input
                      type="number"
                      className="form-control"
                      name="salary"
                      value={emp.salary}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success">Submit</button>
                    <button className="btn btn-danger ms-2" onClick={(e)=>reset(e)}>Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmp;
