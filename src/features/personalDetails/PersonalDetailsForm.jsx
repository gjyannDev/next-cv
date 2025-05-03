import { useState, useEffect } from "react";
import InputFields from "../../components/utils/InputField";
import { addPersonalDetails } from "../../services/api/cvService";
import FetchData from "../../services/cv/FetchData";

export default function PersonalDetailsForm({
  inputDetails = [],
  getPersonalDetails,
  status,
  setStatus,
}) {
  const [changeFormValue, setChangeFormValue] = useState({});
  const { fetchedPersonalDetails } = FetchData();

  useEffect(() => {
    if (status === "edit") {
      setChangeFormValue(fetchedPersonalDetails);
    }
  }, [status, fetchedPersonalDetails]);

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

    setStatus("card");
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

          <div className="grouped__btn--container">
            {status === "edit details" && (
              <button
                type="submit"
                className="btn--primary-2"
                onClick={() => setStatus("card")}
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="btn--primary"
            >
              Save
            </button>
          </div>
        </form>
      }
    </div>
  );
}
