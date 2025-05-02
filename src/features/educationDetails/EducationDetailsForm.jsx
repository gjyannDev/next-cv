import { useState, useEffect } from "react";
import InputFields from "../../components/utils/InputField";
import {
  addEducationDetails,
  updateEducationDetails,
} from "../../services/api/cvService";
import FetchData from "../../services/cv/FetchData";

export default function EducationDetailsForm({
  inputDetails = [],
  status,
  setStatus,
  editEducationData = [],
  educationCardId = "",
}) {
  const [changeFormValue, setChangeFormValue] = useState({});
  const { fetchedAllEducationDetails } = FetchData();
  const id = crypto.randomUUID();

  useEffect(() => {
    if (status === "edit education") {
      editEducationData.forEach((data) => {
        setChangeFormValue(data);
      });
    }
  }, [status, editEducationData]);

  function handleOnSubmit(e) {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);

    const params = {
      id: id,
      ...data,
    };

    if (status === "add education") {
      addEducationDetails(params);
    } else if (status === "edit education") {
      const updated_arr = [...fetchedAllEducationDetails];

      const new_updated_arr = updated_arr.map((education) => {
        if (education.id === educationCardId) {
          return {...params, id: educationCardId};
        } else {
          return education;
        }
      });

      updateEducationDetails(new_updated_arr);
    }

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
