import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const tname = (e) => {
    setName(e.target.value);
  };
  const taddress = (e) => {
    setAddress(e.target.value);
  };

  const newData = (e) => {
    e.preventDefault();

    const data = {
      name,
      address,
    };

    props.addStudent(data);
    setName("")
    setAddress("")
  };

  return (
    <div>
      <form onSubmit={newData}>
        <input type="text" onChange={tname} value={name} placeholder="name"/>
        <br />
        <input type="text" onChange={taddress} value={address} placeholder="address"/>
        <br />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default Form;
