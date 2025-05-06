import { useState, useEffect } from "react";
import { addPersonalDetails } from "../../services/api/cvService";
import FetchData from "../../services/cv/FetchData";
import FeaturePagesForm from "../../components/common/FeaturePagesForm";

export default function PersonalDetailsForm({
  inputDetails = [],
  getPersonalDetails,
  status,
  setStatus,
}) {
  const [changeFormValue, setChangeFormValue] = useState({});
  const { fetchedPersonalDetails, setFetchedPersonalDetails } = FetchData();

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
