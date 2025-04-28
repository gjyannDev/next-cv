import FetchPersonalDetails from "./FetchPersonalDetails";

export default function PersonalDetailsCard() {
  const { fetchedPersonalDetails, setFetchedPersonalDetails } = FetchPersonalDetails();

  return (
    <div className="personal__details--card">
      <h3>{fetchedPersonalDetails.full_name}</h3>
      <p>{fetchedPersonalDetails.job_title}</p>
      <p>{fetchedPersonalDetails.email}</p>
      <p>{fetchedPersonalDetails.phone}</p>
      <p>{fetchedPersonalDetails.address}</p>
    </div>
  )
}