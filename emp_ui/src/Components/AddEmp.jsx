import React from "react";
import { useState }from "react";
import empservice from "../Service/empservice";

//export const employee=React.createContext()
const AddEmp = () => {
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
  const submitEmp = (e) => {
    e.preventDefault();
    empservice
      .saveEmployee(emp)
      .then((res) => {
        setMsg("Employee Added successfully");
        setEmp({ fname: "", lname: "", email: "", address: "", salary: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const reset=(e)=>{
    e.preventDefault()
    setEmp({ fname: "", lname: "", email: "", address: "", salary: "" })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center fs-3 fw-bold">
                Add Employee
                {msg && <p className="text-success">{msg}</p>}
              </div>
              <div className="card-body">
                <form onSubmit={(e) => submitEmp(e)}>
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
};
export default AddEmp;
