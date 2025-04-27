import { getDoc } from "firebase/firestore";
import { col_ref, db } from "./firebaseClient";

export async function getPersonalDetails() {
  try {
    const res = await getDoc(col_ref);
    const data = res.data();

    return data.personalDetails;
  } catch (error) {
    console.error(error);
  }
}
