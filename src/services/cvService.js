import { getDoc, setDoc } from "firebase/firestore";
import { col_ref, db, user_ref } from "./firebaseClient";

export async function getPersonalDetails() {
  try {
    const res = await getDoc(user_ref );
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
      { personalDetails: { ...personalData } },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error(error);
  }
}
