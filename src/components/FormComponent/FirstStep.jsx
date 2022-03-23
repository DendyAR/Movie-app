import React from "react";
import DynamicForm from "../dynamicForm/DynamicForm.jsx";
import "./firstStep.scss";

export default function FirstStep() {
  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            <form method="POST">
              <div className="input-name">
                <div className="col-2">
                  <div className="input-group-name">
                    <label className="label">First Name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="first_name"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group-name">
                    <label className="label">Last Name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="last_name"
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <DynamicForm />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group-gender">
                    <label className="label">Gender</label>
                    <div className="p-t-10">
                      <label className="radio-container m-r-45">
                        Male
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="gender"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="radio-container">
                        Female
                        <input type="radio" name="gender" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="input-group-email">
                  <label className="label">Email</label>
                  <input className="input--style-4" type="email" name="email" />
                </div>
              </div>

              <div className="button-next">
                <button className="btn btn--radius-2 btn--blue" type="submit">
                  <Link classNmae="link-tos" to="/home">
                    Next
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
