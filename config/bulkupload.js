import { collection, doc, setDoc } from "firebase/firestore";
import { carouselImages } from "../store/restaurants";
import { db } from "./firebaseConfig";

const restaurantData = carouselImages;

const uploadData = async () => {
  try {
    for (let i = 0; i < restaurantData.length; i++) {
      const restaurant = restaurantData[i];

      // Extract restaurant id (e.g., "restaurant_1") from the res_id string
      const resPathParts = restaurant.res_id.split("/");
      const restaurantId = resPathParts[resPathParts.length - 1];

      // Create a Firestore DocumentReference instead of using the string
      const restaurantRef = doc(db, "restaurants", restaurantId);

      // Create a doc reference for carousel item
      const docRef = doc(collection(db, "carousel"), `carousel_${i + 1}`);

      // Upload with actual Firestore reference
      await setDoc(docRef, {
        ...restaurant,
        res_id: restaurantRef, // this is now a DocumentReference, not a string
      });
    }

    console.log("✅ Data uploaded successfully with proper references!");
  } catch (e) {
    console.error("❌ Error uploading data:", e);
  }
};

export default uploadData;
