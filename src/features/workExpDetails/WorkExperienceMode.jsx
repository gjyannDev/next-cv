import { useState } from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperienceMode({status, setStatus}) {
  const [workExperienceData, setWorkExperienceData] = useState([]);
  const [workCardId, setWorkCardId] = useState("");

  const work_input_details = [
    {
      labelName: "Company Name",
      inputType: "text",
      name: "company_name",
      withLabel: true,
    },
    {
      labelName: "Job Title",
      inputType: "text",
      name: "job_title",
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
    <div className="work__details--container">
      <h1>Work Experience Details</h1>

      {status === "add" ? (
        <WorkExperienceForm
          inputDetails={work_input_details}
          status={status}
          setStatus={setStatus}
        />
      ) : status === "edit" ? (
        <WorkExperienceForm
          inputDetails={work_input_details}
          status={status}
          setStatus={setStatus}
          editWorkData={workExperienceData}
          workCardId={workCardId}
        />
      ) : (
        <WorkExperienceCard
          setStatus={setStatus}
          setEditWorkData={setWorkExperienceData}
          setWorkId={setWorkCardId}
        />
      )}
    </div>
  );
}
