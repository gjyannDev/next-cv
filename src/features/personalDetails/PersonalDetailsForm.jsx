import { useState } from "react";
import InputFields from "../../components/utils/InputField";

export default function PersonalDetailsForm({
  inputDetails = [],
  getPersonalDetails,
  formType
}) {
  const [changeFormValue, setChangeFormValue] = useState({});

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

    //TODO: Save the data to the fire store database
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
              value={changeFormValue[details.name]}
              onChange={handleOnChange}
            />
          ))}

          <button
            type="submit"
            className="btn--primary"
          >
            {/*//TODO: Change to edit if the edit state is set to to edit if not then save*/}
            Save
          </button>
        </form>
      }
    </div>
  );
}
