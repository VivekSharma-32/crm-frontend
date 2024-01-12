import React, { useState } from "react";
import "./entry.style.css";
import Login from "../../components/Login/Login";
import ResetPassword from "../../components/password-reset/PasswordReset";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  // handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill up all the fields!");
    }

    // Todo - call api to submit the form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter the email!");
    }
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };
  return (
    <div className="entry-page bg-info">
      <div className="card form-box p-5">
        {formLoad === "login" && (
          <Login
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        )}
        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            email={email}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
