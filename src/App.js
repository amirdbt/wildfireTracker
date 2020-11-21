import Map from "./components/Map";
import { useQuery } from "react-query";
import { fetchData } from "./api";

const App = () => {
  const { data, isError, isLoading, isSuccess } = useQuery("events", fetchData);
  if (isSuccess) {
    const { events } = data.data;
    console.log(events);
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Map />
    </>
  );
};

export default App;
