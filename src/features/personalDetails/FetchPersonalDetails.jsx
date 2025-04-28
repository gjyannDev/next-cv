import { useState, useEffect } from "react";
import { getPersonalDetails } from "../../services/cvService";

export default function FetchPersonalDetails() {
  const [fetchedPersonalDetails, setFetchedPersonalDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPersonalDetails();
        setFetchedPersonalDetails(data || {});

      } catch (err) {
        console.error("Error fetching personal details:", err);
      } 
    }

    fetchData();
  }, []);

  return { fetchedPersonalDetails, setFetchedPersonalDetails };
}