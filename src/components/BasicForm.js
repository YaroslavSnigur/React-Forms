import React from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChengeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: secondNameValue,
    isValid: secondNameIsValid,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameChengeHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChengedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && secondNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const secondNameInputClasses = secondNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetFirstNameInput();
    resetSecondNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChengeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Not Valid First Name!</p>
          )}
        </div>

        <div className={secondNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={secondNameValue}
            onChange={secondNameChengeHandler}
            onBlur={secondNameBlurHandler}
          />
          {secondNameHasError && (
            <p className="error-text">Not Valid Second Name!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={enteredEmail}
          onChange={emailChengedHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Not Valid Email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
