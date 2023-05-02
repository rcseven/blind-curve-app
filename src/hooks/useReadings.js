import { db } from "../lib/Firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useReadings = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const trafficConditionRef = ref(db, url);
    onValue(
      trafficConditionRef,
      (snapshot) => {
        const val = snapshot.val();
        setData(val);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [url]);

  return { data };
};

export default useReadings;
