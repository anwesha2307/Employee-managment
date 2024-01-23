import React from "react";
import { useState, useEffect } from "react";
import empservice from "../Service/empservice";

import { Link } from "react-router-dom";
const Home = () => {
  const [empList, setEmpList] = useState([]);
  const[msg,setMsg]=useState("")
  useEffect(() => {
    empservice
      .getAllEmployee()
      .then((res) => {
        console.log("Employee data-");
        console.log(res.data);
        setEmpList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [msg]);
  const del = (id) => {
    empservice
      .delEmployee(id)
      .then((res) => {
        setMsg("Employee Deleted Successfully!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3 fst-italic">Employee Management System</h1>
      <br />
      {msg &&<p className="text-success">{msg}</p>}
      <table class="table mt-5">
        <thead className="bg-light">
          <tr>
            <th scope="row" className="fw-bold">
              Sr. No.
            </th>
            <td className="fw-bold">First Name</td>
            <td className="fw-bold">Last Name</td>
            <td className="fw-bold">Email</td>
            <td className="fw-bold">Address</td>
            <td className="fw-bold">Salary</td>
            <td className="fw-bold">Action</td>
          </tr>
        </thead>
        <tbody>
          {empList.map((e, num) => (
            <tr>
              <th scope="row" key={e.id}>{num}</th>
              <td>{e.fname}</td>
              <td>{e.lname}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.salary}</td>
              <td>
                <Link to={"editEmp/" + e.id} className="btn btn-sm btn-primary">
                  Edit
                </Link>
                <button onClick={()=>del(e.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
