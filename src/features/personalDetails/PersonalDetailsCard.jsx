import FetchData from "../../services/cv/FetchData";

export default function PersonalDetailsCard({setStatus}) {
  const { fetchedPersonalDetails } = FetchData();
  
  return (
    <div className="personal__details--card" onClick={() => { setStatus("edit") }}>
      <h3>{fetchedPersonalDetails.full_name}</h3>
      <p>{fetchedPersonalDetails.job_title}</p>
      <p>{fetchedPersonalDetails.email}</p>
      <p>{fetchedPersonalDetails.phone}</p>
      <p>{fetchedPersonalDetails.address}</p>
    </div>
  )
}