import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import fireDb from "../firebase";

const Contacts = () => {
  const [objectContacts, setObjectContacts] = useState({});
  const [currentId, setCurrentId] = useState("");
  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null)
        setObjectContacts({
          ...snapshot.val(),
        });
      else setObjectContacts({});
    });
  }, []);
  console.log(objectContacts);
  const addOrEdit = (obj) => {
    console.log(obj);

    if (currentId === "") {
      fireDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    } else {
      fireDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record ?")) {
      fireDb.child(`contacts/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...{ addOrEdit, currentId, objectContacts }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(objectContacts).map((id) => {
                return (
                  <tr key={id}>
                    <td>{objectContacts[id].fullName}</td>
                    <td>{objectContacts[id].mobile}</td>
                    <td>{objectContacts[id].email}</td>
                    <td>
                      <span
                        className="btn text-primary "
                        onClick={() => setCurrentId(id)}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      <span
                        className="btn text-danger "
                        onClick={() => onDelete(id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
