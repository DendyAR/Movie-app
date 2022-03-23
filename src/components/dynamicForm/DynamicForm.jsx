import React, { useState, Fragment } from "react";
import "./dynamicform.scss";

export default function FirstStep() {
  const [inputFields, setInputFields] = useState([{ jobDescription: "" }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ jobDescription: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "jobDescription") {
      values[index].jobDescription = event.target.value;
    }
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert(JSON.stringify(inputFields, null, 2));
  };

  const resetForm = (e) => setInputFields([{ jobDescription: "" }]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="jobDescription">job Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobDescription"
                  name="jobDescription"
                  value={inputField.jobDescription}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group-button col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  disabled={index === 0}
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
          <button
            className="btn btn-secondary mr-2"
            type="reset"
            onClick={resetForm}
          >
            Reset Form
          </button>
        </div>
      </form>
    </>
  );
}
