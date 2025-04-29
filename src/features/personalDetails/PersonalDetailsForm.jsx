import { useState, useEffect } from "react";
import InputFields from "../../components/utils/InputField";
import { addPersonalDetails } from "../../services/cvService";
import FetchPersonalDetails from "./FetchPersonalDetails";

export default function PersonalDetailsForm({
  inputDetails = [],
  getPersonalDetails,
  formType,
  setStatus,
}) {
  const [changeFormValue, setChangeFormValue] = useState({});
  const { fetchedPersonalDetails, setFetchedPersonalDetails } =
    FetchPersonalDetails();

  useEffect(() => {
    if (formType === "edit details") {
      setChangeFormValue(fetchedPersonalDetails);
    }
  }, [formType, fetchedPersonalDetails]);

  function handleOnSubmit(e) {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());

    getPersonalDetails(data);

    setChangeFormValue(
      inputDetails.reduce((acc, curr) => {
        acc[curr.name] = "";

        return acc;
      }, {})
    );

    addPersonalDetails(data);

    setStatus("card details");
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setChangeFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <div className="form__container">
      {
        <form onSubmit={handleOnSubmit}>
          {inputDetails.map((details) => (
            <InputFields
              labelName={details.labelName}
              inputType={details.inputType}
              name={details.name}
              value={changeFormValue[details.name] || ""}
              onChange={handleOnChange}
              formType={formType}
            />
          ))}

          <button
            type="submit"
            className="btn--primary"
          >
            Save
          </button>
        </form>
      }
    </div>
  );
}
