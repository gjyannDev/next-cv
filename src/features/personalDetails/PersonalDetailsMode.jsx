import { useState } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import PersonalDetailsCard from "./PersonalDetailsCard";
import FetchPersonalDetails from "./FetchPersonalDetails";

export default function PersonalDetailsMode() {
  const [status, setStatus] = useState("add personal details");
  const [personalDetails, setPersonalDetails] = useState({});

  const personal_details_inputs = [
    {
      labelName: "Full Name",
      inputType: "text",
      name: "full_name",
      withLabel: true,
    },
    {
      labelName: "Job Title",
      inputType: "text",
      name: "job_title",
      withLabel: true,
    },
    {
      labelName: "Email",
      inputType: "email",
      name: "email",
      withLabel: true,
    },
    {
      labelName: "Phone Number",
      inputType: "tel",
      name: "phone",
      withLabel: true,
    },
    {
      labelName: "Address",
      inputType: "text",
      name: "address",
      withLabel: true,
    },
  ];

  return (
    <div className="personal__details--container">
      <h1>Personal Details</h1>

      {status === "add personal details" ? (
        <PersonalDetailsForm
          inputDetails={personal_details_inputs}
          getPersonalDetails={setPersonalDetails}
          formType={"add details"}
          setStatus={setStatus}
        />
      ) : status === "edit personal details" ? (
        <PersonalDetailsForm
          inputDetails={personal_details_inputs}
          getPersonalDetails={setPersonalDetails}
          formType={"edit details"}
          setStatus={setStatus}
        />
      ) : (
        <PersonalDetailsCard/>
      )}
    </div>
  );
}
