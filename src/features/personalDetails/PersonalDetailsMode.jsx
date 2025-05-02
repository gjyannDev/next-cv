import { useState } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import PersonalDetailsCard from "./PersonalDetailsCard";

//TODO: when i change sidebar i need to track the previous status so if i go back to the personal details then it will stay that way
export default function PersonalDetailsMode() {
  const [status, setStatus] = useState("add details");
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

      {status === "add details" ? (
        <PersonalDetailsForm
          inputDetails={personal_details_inputs}
          getPersonalDetails={setPersonalDetails}
          formType={status}
          setStatus={setStatus}
        />
      ) : status === "edit details" ? (
        <PersonalDetailsForm
          inputDetails={personal_details_inputs}
          getPersonalDetails={setPersonalDetails}
          status={status}
          setStatus={setStatus}
        />
      ) : (
        <PersonalDetailsCard setStatus={setStatus}/>
      )}
    </div>
  );
}
