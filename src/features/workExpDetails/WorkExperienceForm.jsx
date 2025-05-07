import { useState, useEffect } from "react";
import InputFields from "../../components/utils/InputField";
import {
  addWorkExperienceDetails,
  updateWorkExperienceDetails,
} from "../../services/api/cvService";
import FetchData from "../../services/cv/FetchData";
import DescriptionDynamicForm from "../../components/common/DescriptionDynamicForm";

export default function WorkExperienceForm({
  inputDetails = [],
  status,
  setStatus,
  editWorkData = [],
  workCardId = "",
}) {
  const [formValues, setFormValues] = useState({});
  const { fetchedAllWorkExpDetails } = FetchData();
  const id = crypto.randomUUID();
  const [workDescriptions, setWorkDescriptions] = useState([]);
  const [initialDescriptionValues, setInitialDescriptionValues] = useState([
    "",
    "",
  ]);

  useEffect(() => {
    if (status === "edit") {
      editWorkData.forEach((data) => {
        setFormValues(data);
      });
    }
  }, [status, editWorkData]);

  function handleOnSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const params = {
      id: id,
      description: [...workDescriptions],
      ...data,
    };

    if (status === "add") {
      addWorkExperienceDetails(params);
    } else if (status === "edit") {
      const updatedArr = [...fetchedAllWorkExpDetails];

      const newUpdatedArr = updatedArr.map((work) => {
        if (work.id === workCardId) {
          return { ...params, id: workCardId };
        } else {
          return work;
        }
      });

      updateWorkExperienceDetails(newUpdatedArr);
    }

    setFormValues(
      inputDetails.reduce((acc, curr) => {
        acc[curr.name] = "";
        return acc;
      }, {})
    );

    setStatus("card");
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="form__container">
      <form onSubmit={handleOnSubmit}>
        {inputDetails.map((details) => (
          <InputFields
            labelName={details.labelName}
            inputType={details.inputType}
            name={details.name}
            value={formValues[details.name] || ""}
            onChange={handleOnChange}
          />
        ))}
        <DescriptionDynamicForm
          getDescription={setWorkDescriptions}
          selectedCardId={workCardId}
          label="Key Contributions (ex. projects, responsibilities)"
          initialDescriptionValue={initialDescriptionValues}
          fetchDetails={fetchedAllWorkExpDetails}
        />
        <div className="grouped__btn--container">
          {(status === "edit" || status === "add") && (
            <button
              type="submit"
              className="btn--primary-2"
              onClick={() => setStatus("card")}
            >
              {status === "edit" ? "Cancel" : "Preview"}
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
    </div>
  );
}
