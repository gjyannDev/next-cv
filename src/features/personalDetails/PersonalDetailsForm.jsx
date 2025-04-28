import { useState } from "react";
import InputFields from "../../components/utils/InputField";
import { addPersonalDetails } from "../../services/cvService";
import FetchPersonalDetails from "./FetchPersonalDetails";

export default function PersonalDetailsForm({
  inputDetails = [],
  getPersonalDetails,
  formType,
}) {
  const [changeFormValue, setChangeFormValue] = useState({});
  const { personalDetails, setPersonalDetails } = FetchPersonalDetails();

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
              value={
                formType === "add details"
                  ? changeFormValue[details.name]
                  : personalDetails[details.name]
              }
              onChange={handleOnChange}
              formType={formType}
            />
          ))}

          <button
            type="submit"
            className="btn--primary"
          >
            {/*//TODO: Change to edit if the edit state is set to to edit if not then save*/}
            {formType === "add details" ? "Save" : "Edit"}
          </button>
        </form>
      }
    </div>
  );
}
