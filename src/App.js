import Map from "./components/Map";
import { useQuery } from "react-query";
import { fetchData } from "./api";
import FadeLoader from "react-spinners/FadeLoader";

const App = () => {
  const { data, isError, isLoading, isSuccess } = useQuery("events", fetchData);
  if (isSuccess) {
    const { events } = data.data;
    console.log(events);
  }
  if (isError) {
    console.log("Error");
  }
  if (isLoading) {
    return (
      <div className="loader">
        <FadeLoader
          color="#335977"
          height="25px"
          width="5px"
          radius="2px"
          margin="2px"
        />
      </div>
    );
  }
  return <>{isSuccess && <Map events={data.data.events} />}</>;
};

export default App;
