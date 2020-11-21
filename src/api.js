import axios from "axios";

export const fetchData = async () => {
  const res = await axios.get(
    "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
  );
  return res;
};
