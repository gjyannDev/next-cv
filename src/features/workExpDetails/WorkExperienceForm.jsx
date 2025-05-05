import { useState, useEffect } from "react";
import FetchData from "../../services/cv/FetchData";
import {
  addWorkExperienceDetails,
  updateWorkExperienceDetails,
} from "../../services/api/cvService";
import FeaturePagesForm from "../../components/common/FeaturePagesForm";

export default function WorkExperienceForm({
  inputDetails = [],
  status,
  setStatus,
  editWorkData = [],
  workCardId = "",
}) {
  const [changeFormValue, setChangeFormValue] = useState({});
  const { fetchedAllWorkExpDetails } = FetchData();
  const id = crypto.randomUUID();

  useEffect(() => {
    if (status === "edit") {
      editWorkData.forEach((data) => {
        setChangeFormValue(data);
      });
    }
  }, [status, editWorkData]);

  function handleOnSubmit(e) {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);

    const params = {
      id: id,
      ...data,
    };

    if (status === "add") {
      addWorkExperienceDetails(params);
    } else if (status === "edit") {
      const updated_arr = [...fetchedAllWorkExpDetails];
      const new_updated_arr = updated_arr.map((education) => {
        if (education.id === workCardId) {
          return { ...params, id: workCardId };
        } else {
          return education;
        }
      });
      updateWorkExperienceDetails(new_updated_arr);
    }

    setChangeFormValue(
      inputDetails.reduce((acc, curr) => {
        acc[curr.name] = "";

        return acc;
      }, {})
    );

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
    <>
      <FeaturePagesForm
        handleOnSubmit={handleOnSubmit}
        inputDetails={inputDetails}
        value={changeFormValue}
        handleOnChange={handleOnChange}
        setStatus={setStatus}
        status={status}
      />
    </>
  );
}
