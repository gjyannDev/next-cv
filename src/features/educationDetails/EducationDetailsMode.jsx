import { useState } from "react";
import EducationDetailsForm from "./EducationDetailsForm";
import EducationDetailsCard from "./EducationDetailsCard";

export default function EducationDetailsMode({status, setStatus}) {
  const [editEducationData, setEditEducationData] = useState([]);
  const [educationCardId, setEducationCardId] = useState("");

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

      {status === "add" ? (
        <EducationDetailsForm
          inputDetails={education_details_inputs}
          status={status}
          setStatus={setStatus}
        />
      ) : status === "edit" ? (
        <EducationDetailsForm
          inputDetails={education_details_inputs}
          status={status}
          setStatus={setStatus}
          editEducationData={editEducationData}
          educationCardId={educationCardId}
        />
      ) : (
        <EducationDetailsCard
          setStatus={setStatus}
          setEditEducationData={setEditEducationData}
          setEducationCardId={setEducationCardId}
        />
      )}
    </div>
  );
}
