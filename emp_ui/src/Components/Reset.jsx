import React from "react";

function Reset() {
  const reset = (e) => {
    e.preventDefault();
    setEmp({ fname: "", lname: "", email: "", address: "", salary: "" });
  };
  return <div></div>;
}

export default Reset;
