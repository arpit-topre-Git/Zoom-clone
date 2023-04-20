import "./App.css";
import Meeting from "./components/Meeting";
import Details from "./components/Details";

function App() {
  return (
    <>
      <div className="App mt-8">
        <header className="App-header my-auto font-bold text-lg text-gray-600">
          Generating Minutes of Meeting
        </header>

        <div className=" mt-4 flex flex-col gap-10 justify-center md:flex-row md:px-4">
          {/* Meeting section */}
          <Meeting />
          {/*  Details section*/}
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
