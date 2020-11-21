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
  if (isLoading) {
    return (
      <div className="loader">
        <FadeLoader
          color="#335977"
          height="25"
          width="5"
          radius="2"
          margin="2"
        />
      </div>
    );
  }
  return <>{isSuccess && <Map events={data.data.events} />}</>;
};

export default App;
