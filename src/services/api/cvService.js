import {
  addDoc,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { col_ref, db, user_ref } from "../firebaseClient";

export async function getPersonalDetails() {
  try {
    const res = await getDoc(user_ref);
    const data = res.data();

    return data.personalDetails;
  } catch (error) {
    console.error(error);
  }
}

export async function addPersonalDetails(personalData) {
  try {
    const res = await setDoc(
      user_ref,
      {
        personalDetails: { ...personalData },
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function addLanguageSkill(languageSkills) {
  try {
    const res = await setDoc(
      user_ref,
      {
        technicalSkills: { languages: [...languageSkills] },
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error("Error adding language skills:", error);
  }
}

export async function addFrameWorksSkill(frameWorksSkills) {
  try {
    const res = await setDoc(
      user_ref,
      {
        technicalSkills: { frameWorks: [...frameWorksSkills] },
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error("Error adding frame works skills:", error);
  }
}

export async function addToolsSkills(toolsSkills) {
  try {
    const res = await setDoc(
      user_ref,
      {
        technicalSkills: { tools: [...toolsSkills] },
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error("Error adding tools skills:", error);
  }
}

export async function getTechnicalSkills() {
  try {
    const res = await getDoc(user_ref);
    const data = res.data();

    return data.technicalSkills;
  } catch (error) {
    console.error(error);
  }
}

export async function addEducationDetails(educationData) {
  try {
    const res = await updateDoc(
      user_ref,
      {
        educationDetails: arrayUnion(educationData),
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error("Error adding education details:", error);
  }
}

export async function getAllEducationDetails() {
  try {
    const res = await getDoc(user_ref);
    const data = res.data();

    return data.educationDetails;
  } catch (error) {
    console.error("Error getting all education details:", error);
  }
}

export async function updateEducationDetails(updatedEducationData) {
  try {
    const res = await setDoc(
      user_ref,
      {
        educationDetails: updatedEducationData,
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error("Error adding tools skills:", error);
  }
}

export async function addWorkExperienceDetails(workExperienceData) {
  try {
    const res = await updateDoc(
      user_ref,
      {
        workExperienceDetails: arrayUnion(workExperienceData),
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error("Error adding work experience details:", error);
  }
}

export async function getAllWorkDetails() {
  try {
    const res = await getDoc(user_ref);
    const data = res.data();

    return data.workExperienceDetails;
  } catch (error) {
    console.error("Error getting all work experience details:", error);
  }
}

export async function updateWorkExperienceDetails(updatedWorkData) {
  try {
    const res = await setDoc(
      user_ref,
      {
        workExperienceDetails: updatedWorkData,
      },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error("Error updating work experience details:", error);
  }
}
