import { useState, useEffect } from "react";
import { getPersonalDetails, getTechnicalSkills } from "../api/cvService";

export default function FetchData() {
  const [fetchedPersonalDetails, setFetchedPersonalDetails] = useState({});
  const [fetchedLanguagesSkills, setFetchedLanguagesSkills] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const get_personal_details = await getPersonalDetails();
        setFetchedPersonalDetails(get_personal_details || {});

        const get_languages_skills = await getTechnicalSkills();
        setFetchedLanguagesSkills(get_languages_skills.languages || []);

      } catch (err) {
        console.error("Error fetching personal details:", err);
      }
    }

    fetchData();
  }, []);

  return { fetchedPersonalDetails, fetchedLanguagesSkills };
}
