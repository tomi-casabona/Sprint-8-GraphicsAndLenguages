import "./assets/App.css";
import { TotalBalance } from "./components/dataComponents/TotalBalance";
import { WeeklyGraphic } from "./components/dataComponents/WeeklyGraphic";
import { WeeklyReport } from "./components/dataComponents/WeeklyReport";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-300 underline">
        Hello world!
      </h1>
      <WeeklyReport />
    </>
  );
}

export default App;
