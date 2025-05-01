import { useState } from "react";
import EducationDetailsForm from "./EducationDetailsForm";
import EducationDetailsCard from "./EducationDetailsCard";

export default function EducationDetailsMode() {
  const [educationStatus, setEducationStatus] = useState("add education");

  const education_details_inputs = [
    {
      labelName: "Degree",
      inputType: "text",
      name: "degree",
      withLabel: true,
    },
    {
      labelName: "School",
      inputType: "text",
      name: "school",
      withLabel: true,
    },
    {
      labelName: "City",
      inputType: "text",
      name: "city",
      withLabel: true,
    },
    {
      labelName: "Country",
      inputType: "tel",
      name: "country",
      withLabel: true,
    },
    {
      labelName: "Start Date",
      inputType: "date",
      name: "start_date",
      withLabel: true,
    },
    {
      labelName: "End Date",
      inputType: "date",
      name: "end_date",
      withLabel: true,
    },
  ];

  return (
    <div className="education__details--container">
      <h1>Education Details</h1>

      {educationStatus === "add education" ? (
        <EducationDetailsForm
          inputDetails={education_details_inputs}
          status={educationStatus}
          setStatus={setEducationStatus}
        />
      ) : educationStatus === "card education" ? (
        <EducationDetailsCard />
      ) : null}
    </div>
  );
}
