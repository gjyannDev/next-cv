import { useState, useEffect } from "react";
import { getPersonalDetails } from "../../services/cvService";

export default function FetchPersonalDetails() {
  const [personalDetails, setPersonalDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPersonalDetails();
        setPersonalDetails(data || {});

      } catch (err) {
        console.error("Error fetching personal details:", err);
      } 
    }

    fetchData();
  }, []);

  return { personalDetails, setPersonalDetails };
}