import { useState, useEffect } from "react";
import {
  getPersonalDetails,
  getTechnicalSkills,
  getAllEducationDetails,
  getAllWorkDetails,
} from "../api/cvService";

export default function FetchData() {
  const [fetchedPersonalDetails, setFetchedPersonalDetails] = useState({});
  const [fetchedLanguagesSkills, setFetchedLanguagesSkills] = useState([]);
  const [fetchedFrameWorksSkills, setFetchedFrameWorksSkills] = useState([]);
  const [fetchedToolsSkills, setFetchedToolsSkills] = useState([]);
  const [fetchedAllEducationDetails, setFetchedAllEducationDetails] = useState(
    []
  );
  const [fetchedAllWorkExpDetails, setFetchedAllWorkExpDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const get_personal_details = await getPersonalDetails();
        setFetchedPersonalDetails(get_personal_details || {});

        const get_languages_skills = await getTechnicalSkills();
        setFetchedLanguagesSkills(get_languages_skills.languages || []);

        const get_frameworks_skills = await getTechnicalSkills();
        setFetchedFrameWorksSkills(get_frameworks_skills.frameWorks || []);

        const get_tools_skills = await getTechnicalSkills();
        setFetchedToolsSkills(get_tools_skills.tools || []);

        const get_all_education = await getAllEducationDetails();
        setFetchedAllEducationDetails(get_all_education || []);

        const get_all_work = await getAllWorkDetails();
        setFetchedAllWorkExpDetails(get_all_work || []);
      } catch (err) {
        console.error("Error fetching personal details:", err);
      }
    }

    fetchData();
  }, []);

  return {
    fetchedPersonalDetails,
    fetchedLanguagesSkills,
    fetchedFrameWorksSkills,
    fetchedToolsSkills,
    fetchedAllEducationDetails,
    setFetchedAllEducationDetails,
    fetchedAllWorkExpDetails,
    setFetchedAllWorkExpDetails,
  };
}
