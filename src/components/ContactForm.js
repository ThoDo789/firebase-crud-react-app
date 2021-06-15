import React, { useState, useEffect } from "react";

const ContactForm = ({ addOrEdit, currentId, objectContacts }) => {
  const initialFieldValue = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  useEffect(() => {
    if (currentId === "") {
      setValues({
        ...initialFieldValue,
      });
    } else {
      setValues({
        ...objectContacts[currentId],
      });
    }
  }, [currentId, objectContacts]);
  const [values, setValues] = useState(initialFieldValue);
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };
  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="full-name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt" />
            </div>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Number-phone"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope" />
            </div>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={currentId ? "Update" : "Save"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
