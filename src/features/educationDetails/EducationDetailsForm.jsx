import { useState } from "react";
import InputFields from "../../components/utils/InputField";
import { addEducationDetails } from "../../services/api/cvService";

export default function EducationDetailsForm({
  inputDetails = [],
  status,
  setStatus,
}) {
  const [changeFormValue, setChangeFormValue] = useState({});
  const id = crypto.randomUUID();

  function handleOnSubmit(e) {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);

    const params = {
      id: id,
      ...data,
    };

    addEducationDetails(params);

    setChangeFormValue(
      inputDetails.reduce((acc, curr) => {
        acc[curr.name] = "";

        return acc;
      }, {})
    );

    setStatus("card education");
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
